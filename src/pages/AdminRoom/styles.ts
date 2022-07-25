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

        .question-list {
            margin-top: 32px;
        }
    }
}
`
