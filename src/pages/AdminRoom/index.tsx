import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import deleteImg from '../../assets/delete.svg';
import checkImg from '../../assets/check.svg';
import answerImg from '../../assets/answer.svg';

import { Button } from '../../components/Button';
import { Question } from '../../components/Question';
import { RoomCode } from '../../components/RoomCode';
import { useRoom } from '../../hooks/useRoom';
import { database } from '../../services/firebase';

import './styles';
import { Container } from './styles';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import Switch from 'react-switch';

type RoomParams = {
    id: string;
};

interface Props {
    toggleTheme(): void;
};

export function AdminRoom({toggleTheme}: Props) {
    const navigate = useNavigate();
    const params = useParams<RoomParams>();
    const roomId = params.id;

    const { title, questions } = useRoom(`${roomId}`);

    const { colors, titleTheme } = useContext(ThemeContext);

    async function handleEndRoom() {
       await database.ref(`rooms/${roomId}`).update({
           endedAt: new Date(),
        })

        navigate('/');
    };

    async function handleDeleteQuestion(questionId: string) {
        if (window.confirm('Are you sure you want to close this room?')) {
            await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
        };
    };

    async function handleCheckQuestionAsAnswered(questionId: string) {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
            isAnswered: true,
        });
    };

    async function handleHighlightQuestion(questionId: string) {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
            isHighLighted: true,
        });
    };

    return(
        <Container>

            <div id="page-room">    

                <header>

                    <div className="content">

                        <img src={logoImg} alt="Letmeask" />

                        <div>
                            <RoomCode code={roomId} />
                            <Button isOutlined onClick={handleEndRoom}>Close room</Button>
                        </div>

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

                    </div>

                </header>

                <main>

                    <div className="room-title">

                        <h1>
                            {title} Room
                        </h1>

                        { questions.length > 0 && <span> {questions.length} Question(s) </span> }

                    </div>

                    <div className="question-list">

                        {questions.map(question => {
                            return (
                                <Question 
                                    key={question.id}
                                    content={question.content}
                                    author={question.author}
                                    isAnswered={question.isAnswered}
                                    isHighLighted={question.isHighLighted}
                                >

                                    {!question.isAnswered && (
                                        <>

                                            <button
                                                type="button"
                                                onClick={() => handleCheckQuestionAsAnswered(question.id)}
                                            >
                                                <img src={checkImg} alt="Mark question as answered" />
                                            </button>

                                            <button
                                                type="button"
                                                onClick={() => handleHighlightQuestion(question.id)}
                                            >
                                                <img src={answerImg} alt="Highlight the question" />
                                            </button>

                                        </>
                                    )}

                                    <button
                                        type="button"
                                        onClick={() => handleDeleteQuestion(question.id)}
                                    >
                                        <img src={deleteImg} alt="Remove question" />
                                    </button>

                                </Question>
                            );
                        })}

                    </div>

                </main>

            </div>
            
        </Container>
    );
};
