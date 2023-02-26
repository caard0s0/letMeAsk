import styled from 'styled-components';

export const Container = styled.div`
.room-code {
    height: 4rem;
    border-radius: 0 0.8rem 0.8rem 0.8rem;
    overflow: hidden;

    background: ${props => props.theme.colors.background.primary};
    border: 1px solid ${props => props.theme.colors.background.secondary};
    color: ${props => props.theme.colors.textColor.primary};

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.9);
    }

    cursor: pointer;

    display: flex;

    div {
        background: ${props => props.theme.colors.background.secondary};
        padding: 0.9rem 1.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    span {
        display: block;
        align-self: center;
        flex: 1;
        padding: 0 1.6rem 0 1.2rem;
        width: 24rem;
        font-size: 1.4rem;
        font-weight: 500;
    }
}`;
