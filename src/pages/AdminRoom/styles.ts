import styled from 'styled-components';

export const Container = styled.div`
#page-room {
    header {
        padding: 2.4rem;
        border-bottom: 1px solid ${props => props.theme.colors.gray.line}; 

        .content {
            max-width: 112rem;
            margin: 0 auto;
            display: flex;
            justify-content: space-around;
            align-items: center;
    
            > img {
                max-height: 4.5rem;
            }
            

            > div {
                display: flex;
                gap: 1.6rem;

                button {
                    height: 4rem;
                }
            }
        }
    }

    main {
        max-width: 80rem;
        margin: 0 auto;

        .room-title {
            margin: 3.2rem 0 2.4rem;
            display: flex;
            align-items: center;

            h1 {
                font-family: 'Poppins', sans-serif;
                font-size: 2.4rem;
                color: ${props => props.theme.colors.textColor.primary};
            }

            span {
                margin-left: 1.6rem;
                background: ${props => props.theme.colors.pink.medium};
                border-radius: 9999px;
                padding: 0.8rem 1.6rem;
                color: ${props => props.theme.colors.white.light};
                font-weight: 500;
                font-size: 1.4rem;
            }
        }

        .question-list {
            margin-top: 3.2rem;
        }
    }
}`;
