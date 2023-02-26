import styled from 'styled-components';

export const Container = styled.div`
#page-auth {
    display: flex;
    align-items: stretch;
    height: 100vh;

    aside {
        flex: 6;

        background: ${props => props.theme.colors.background.secondary};
        color: ${props => props.theme.colors.white.light};

        display: flex;
        flex-direction: column;
        justify-content: center;

        padding: 12rem 8rem; 
    }

    img {
        max-width: 32rem;
    }

    strong {
        font: 700 3.6rem 'Poppins', sans-serif;
        line-height: 4.2rem;
        margin-top: 1.6rem;
    }

    p {
        font-size: 2.4rem;
        line-height: 3.2rem;
        margin-top: 1.6rem;
        color: ${props => props.theme.colors.white.medium};
    }

    main {
        flex: 8;

        padding: 0 32px;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    div .switch {
        position: fixed;
        right: 4.8rem;
        top: 4.8rem;
    }

    .main-content {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 32rem;
        align-items: stretch;
        text-align: center;

        > img {
            align-self: center;
        }

        form {
            input {
                height: 5rem;
                border-radius: 0 0.8rem 0.8rem 0.8rem;
                padding: 0 1.6rem;
                background: ${props => props.theme.colors.background.input};
                border: 1px solid ${props => props.theme.colors.gray.dark};
                color: ${props => props.theme.colors.textColor.input};
            }

            button {
                margin-top: 1.6rem;
            }

            button, input {
                width: 100%;
            }
        }

        .create-room {
            margin-top: 3.2rem;
            height: 5rem;
            border-radius: 0 0.8rem 0.8rem 0.8rem;
            font-weight: 500;
            background: ${props => props.theme.colors.google};
            color: ${props => props.theme.colors.white.light};

            display: flex;
            justify-content: center;
            align-items: center;

            cursor: pointer;
            border: 0;

            transition: filter 0.2s;

            img {
                margin-right: 0.8rem;
            }

            &:hover {
                filter: brightness(0.9);
            }
        }

        .separator {
            font-size: 1.4rem;
            color: ${props => props.theme.colors.gray.separator};

            margin: 3.2rem 0;
            display: flex;
            align-items: center;

            &::before {
                content: '';
                flex: 1;
                height: 1px;
                background: ${props => props.theme.colors.gray.separator};
                margin-right: 1.6rem;
            }

            &::after {
                content: '';
                flex: 1;
                height: 1px;
                background: ${props => props.theme.colors.gray.separator};
                margin-left: 1.6rem;
            }
        }
    }
}`;
