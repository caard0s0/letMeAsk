import copyImg from '../../assets/copy.svg';

import './styles';
import { Container } from './styles';

type RoomCodeProps = {
    code?: string;
}

export function RoomCode(props: RoomCodeProps) {
    function copyRoomCodeToClipBoard() {
        navigator.clipboard.writeText(`${props.code}`)
    }

    return (
        <Container>

            <button className="room-code" onClick={copyRoomCodeToClipBoard}>

                <div>
                    <img src={copyImg} alt="Copy room code" />
                </div>

                <span>
                    Room #{props.code}
                </span>

            </button>
            
        </Container>
    )
}
