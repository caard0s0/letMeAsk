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

        padding: 0 3.2rem;

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

        h2 {
            font-size: 2.4rem;
            margin: 3.2rem 0 2.4rem;
            font-family: 'Poppins', sans-serif;
        }

        form {
            input {
                height: 5rem;
                border-radius: 0.8rem;
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

        p {
            font-size: 1.4rem;
            color: ${props => props.theme.colors.textColor.details};
            margin-top: 1.6rem;

            a {
                font-size: 1.4rem;
                color: ${props => props.theme.colors.pink.medium};
            }
        }
    }
}`;