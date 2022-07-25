import styled from 'styled-components'

export const Container = styled.div`
#page-room {
    header {
        padding: 24px;
        border-bottom: 1px solid ${props => props.theme.colors.gray.line}; 

        .content {
            max-width: 1120px;
            margin: 0 auto;
            display: flex;
            justify-content: space-around;
            align-items: center;
    
            > img {
                max-height: 45px;
            }

            > div {
                display: flex;
                gap: 16px;

                button {
                    height: 40px;
                }
            }

        }
    }

    main {
        max-width: 800px;
        margin: 0 auto;

        .room-title {
            margin: 32px 0 24px;
            display: flex;
            align-items: center;

            h1 {
                font-family: 'Poppins', sans-serif;
                font-size: 24px;
                color: ${props => props.theme.colors.textColor.primary};
            }

            span {
                margin-left: 16px;
                background: ${props => props.theme.colors.pink.medium};
                border-radius: 9999px;
                padding: 8px 16px;
                color: ${props => props.theme.colors.white.light};
                font-weight: 500;
                font-size: 14px;
            }
        }

        form {
            textarea {
                width: 100%;
                border: 0;
                padding: 16px;
                border-radius: 0px 8px 8px 8px;
                background: ${props => props.theme.colors.background.question};
                color: ${props => props.theme.colors.textColor.primary};
                box-shadow: rgb(0 0 0 / 20%) 0px 0.1rem 0.4rem;
                resize: vertical;
                min-height: 130px;
            }

            .form-footer {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 16px;

                .user-info {
                    display: flex;
                    align-items: center;

                    img {
                        width: 32px;
                        height: 32px;
                        border-radius: 50%;
                    }

                    span {
                        margin-left: 8px;
                        color: ${props => props.theme.colors.textColor.details};;
                        font-weight: 500;
                        font-size: 14px;
                    }
                }

                > span {
                    font-size: 14px;
                    color: ${props => props.theme.colors.gray.medium};
                    font-weight: 500;

                    button {
                        background: transparent;
                        border: 0;
                        color: ${props => props.theme.colors.purple.light};
                        text-decoration: underline;
                        font-size: 14px;
                        font-weight: 500;
                        cursor: pointer;
                    }
                }
            }
        }

        .question-list {
            margin-top: 32px;
        }
    }
}
`