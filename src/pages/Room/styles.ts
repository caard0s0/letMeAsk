import styled from 'styled-components'

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

        form {
            textarea {
                width: 100%;
                border: 0;
                padding: 1.6rem;
                border-radius: 0 0.8rem 0.8rem 0.8rem;
                background: ${props => props.theme.colors.background.question};
                color: ${props => props.theme.colors.textColor.primary};
                box-shadow: rgb(0 0 0 / 20%) 0px 0.1rem 0.4rem;
                resize: vertical;
                min-height: 13rem;
            }

            .form-footer {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 1.6rem;

                .user-info {
                    display: flex;
                    align-items: center;

                    img {
                        width: 3.2rem;
                        height: 3.2rem;
                        border-radius: 50%;
                    }

                    span {
                        margin-left: 0.8rem;
                        color: ${props => props.theme.colors.textColor.details};;
                        font-weight: 500;
                        font-size: 1.4rem;
                    }
                }

                > span {
                    font-size: 1.4rem;
                    color: ${props => props.theme.colors.gray.medium};
                    font-weight: 500;

                    button {
                        background: transparent;
                        border: 0;
                        color: ${props => props.theme.colors.purple.light};
                        text-decoration: underline;
                        font-size: 1.4rem;
                        font-weight: 500;
                        cursor: pointer;
                    }
                }
            }
        }

        .question-list {
            margin-top: 3.2rem;
        }
    }
}
`