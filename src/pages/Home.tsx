import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom'

import illustrationImg from '../assets/illustration.svg';
import logoImg from '../assets/logo.svg';
import googleIconImg from '../assets/google-icon.svg';

import { database } from '../services/firebase';

import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';

import '../styles/auth.scss';

export function Home() {
    const navigate = useNavigate();
    const { user, signInWithGoogle } = useAuth()
    const [roomCode, setRoomCode] = useState('');
    
    async function handleCreateRoom() {
        if (!user) {
            await signInWithGoogle()
        }

        navigate('/rooms/new');
    }

    async function handleJoinRoom(event: FormEvent) {
        event.preventDefault();

        if (roomCode.trim() === '') {
            return;
        }

        const roomRef = await database.ref(`rooms/${roomCode}`).get();

        if (!roomRef.exists()) {
            alert('Room does not exists.');
            return;
        }

        if (roomRef.val().endedAt) { //closedAt 
            alert('Room already closed.');
            return;
        }

        navigate(`/rooms/${roomCode}`);
    }

    return (

        <div id="page-auth">

            <aside>

                <img src={illustrationImg} alt="Illustration symbolizing questions and answers" />

                <strong>
                    Create live Q&amp;A rooms
                </strong>

                <p>
                    Clear your audience's doubts in real time
                </p>

            </aside>

            <main>

                <div className="main-content">

                    <img src={logoImg} alt="Letmeask" />

                    <button onClick={handleCreateRoom} className="create-room">

                        <img src={googleIconImg} alt="Google Icon" />

                        Create your room with google

                    </button>

                    <div className="separator">
                        Or enter a room
                    </div>

                    <form onSubmit={handleJoinRoom}>

                        <input 
                        type="text" 
                        placeholder="Enter your room code"
                        onChange={event => setRoomCode(event.target.value)}
                        value={roomCode}
                        />

                        <Button type="submit">
                            Enter the room
                        </Button>

                    </form>

                </div>

            </main>

        </div>
    )
}
