import { FormEvent, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import illustrationImg from '../../assets/illustration.svg'
import LogoImg from '../../assets/logo.svg'
import googleIconImg from '../../assets/google-icon.svg'

import { database } from '../../services/firebase'

import { Button } from '../../components/Button'
import { useAuth } from '../../hooks/useAuth'

import { ThemeContext } from 'styled-components'
import { Container } from './styles.'
import { shade } from 'polished'

import Switch from 'react-switch'

interface Props {
    toggleTheme(): void;
}

export function Home({toggleTheme}: Props) {
    const navigate = useNavigate();
    const { user, signInWithGoogle } = useAuth();
    const [roomCode, setRoomCode] = useState('');

    const { colors, titleTheme } = useContext(ThemeContext)
    
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

        if (roomRef.val().closedAt) {
            alert('Room already closed.');
            return;
        }

        navigate(`/rooms/${roomCode}`);
    }

    return (
        <Container>

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

                        <div className="switch">

                            <Switch 
                                onChange={toggleTheme}
                                checked={titleTheme === 'dark'}
                                checkedIcon={false}
                                uncheckedIcon={false}
                                height={10}
                                width={40}
                                handleDiameter={20}
                                offColor={colors.background.secondary}
                                onColor={shade(0.35, "#835AFD")}
                            />

                        </div>

                        <img src={LogoImg} alt="Letmeask" />

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
            
        </Container>
    )
}
