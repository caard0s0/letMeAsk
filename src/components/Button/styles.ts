import styled from 'styled-components'

export const Container = styled.div`
.button {
    height: 5rem;
    border-radius: 0 0.8rem 0.8rem 0.8rem;
    font-weight: 500;
    background: ${props => props.theme.colors.background.secondary};
    color: ${props => props.theme.colors.white.light};
    padding: 0 3.2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    border: 0;

    transition: filter 0.2s;

    img {
        margin-right: 0.8rem;
    }

    &.outlined {
        background: ${props => props.theme.colors.background.secondary};
        color: ${props => props.theme.colors.white.light};
    }

    &:not(:disabled):hover {
        filter: brightness(0.9);
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

}
`

