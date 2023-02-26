import { FormEvent, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import illustrationImg from '../../assets/illustration.svg';
import logoImg from '../../assets/logo.svg';

import { Button } from '../../components/Button';
import { database } from '../../services/firebase';
import { useAuth } from '../../hooks/useAuth';

import { Container } from './styles';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import Switch from 'react-switch';

interface Props {
    toggleTheme(): void;
};

export function NewRoom({toggleTheme}: Props) {
    const { user } = useAuth()
    const navigate = useNavigate()
    const [newRoom, setNewRoom] = useState('');

    const { colors, titleTheme } = useContext(ThemeContext);

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault();

        if (newRoom.trim() === '') {
            return;
        };

        const roomRef = database.ref('rooms');

        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id,
        });

        navigate(`/admin/rooms/${firebaseRoom.key}`)
    };

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

                        <img src={logoImg} alt="Letmeask" />

                        <h2>
                            Create a new room
                        </h2>

                        <form onSubmit={handleCreateRoom}>

                            <input 
                            type="text" 
                            placeholder="Room name"
                            onChange={event => setNewRoom(event.target.value)}
                            value={newRoom}
                            />

                            <Button type="submit">
                                Create room
                            </Button>

                        </form>

                        <p>
                            Want to join an existing room? <Link to="/"> Click here </Link> 
                        </p>

                    </div>

                </main>

            </div>
        </Container>
    );
};
