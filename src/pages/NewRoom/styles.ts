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

        h2 {
            font-size: 24px;
            margin: 32px 0 24px;
            font-family: 'Poppins', sans-serif;
        }

        form {
            input {
                height: 50px;
                border-radius: 8px;
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

        p {
            font-size: 14px;
            color: ${props => props.theme.colors.textColor.details};
            margin-top: 16px;

            a {
                color: ${props => props.theme.colors.pink.medium};
            }
        }
    }
}
`