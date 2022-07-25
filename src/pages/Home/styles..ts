import styled from 'styled-components'

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

        padding: 120px 80px; 
    }

    img {
        max-width: 320px;
    }

    strong {
        font: 700 36px 'Poppins', sans-serif;
        line-height: 42px;
        margin-top: 16px;
    }

    p {
        font-size: 24px;
        line-height: 32px;
        margin-top: 16px;
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
        right: 3rem;
        top: 3rem;
    }

    .main-content {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 320px;
        align-items: stretch;
        text-align: center;

        > img {
            align-self: center;
        }

        form {
            input {
                height: 50px;
                border-radius: 0 8px 8px 8px;
                padding: 0 16px;
                background: ${props => props.theme.colors.background.input};
                border: 1px solid ${props => props.theme.colors.gray.dark};
                color: ${props => props.theme.colors.textColor.input};
            }

            button {
                margin-top: 16px;
            }

            button, input {
                width: 100%;
            }
        }

        .create-room {
            margin-top: 32px;
            height: 50px;
            border-radius: 0 8px 8px 8px;
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
                margin-right: 8px;
            }

            &:hover {
                filter: brightness(0.9);
            }
        }

        .separator {
            font-size: 14px;
            color: ${props => props.theme.colors.gray.separator};

            margin: 32px 0;
            display: flex;
            align-items: center;

            &::before {
                content: '';
                flex: 1;
                height: 1px;
                background: ${props => props.theme.colors.gray.separator};
                margin-right: 16px;
            }

            &::after {
                content: '';
                flex: 1;
                height: 1px;
                background: ${props => props.theme.colors.gray.separator};
                margin-left: 16px;
            }
        }
    }
}
`


