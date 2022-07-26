import styled from 'styled-components'

export const Container = styled.div`
.question {
    background: ${props => props.theme.colors.background.question};
    border-radius: 0 0.8rem 0.8rem 0.8rem;
    box-shadow: rgb(0 0 0 / 20%) 0px 0.1rem 0.4rem;
    padding: 2.4rem;
    margin-top: 1.4rem;

    & + .question {
        margin-top: 0.8rem;
    }
    
    &.highlighted {
        background: ${props => props.theme.colors.gray.line};
        border: 1px solid ${props => props.theme.colors.background.secondary};
        
        footer .user-info span {
            color: ${props => props.theme.colors.textColor.details};
        }
    }

    &.answered {
        background: ${props => props.theme.colors.gray.dark};
    }
    
    p {
        color: ${props => props.theme.colors.textColor.primary};
    }

    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 2.4rem;

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
                color: ${props => props.theme.colors.textColor.details};
                font-weight: 500;
                font-size: 1.4rem;
            }
        }

        > div {
            display: flex;
            gap: 1.6rem;
        }

        button {
            border: 0;
            background: transparent;
            cursor: pointer;
            transition: filter 0.2s;

            &.like-button {
                display: flex;
                align-items: flex-end;
                color: ${props => props.theme.colors.textColor.details};
                gap: 0.8rem;

                &.liked {
                    color: ${props => props.theme.colors.purple.light};

                    svg path {
                        stroke: ${props => props.theme.colors.purple.light};
                    }
                }
            }

            &:hover {
                filter: brightness(0.7);
            }
        }
    }
}
`
