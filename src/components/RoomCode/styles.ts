import styled from 'styled-components'

export const Container = styled.div`
.room-code {
    height: 40px;
    border-radius: 0 8px 8px 8px;
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
        padding: 9px 12px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    span {
        display: block;
        align-self: center;
        flex: 1;
        padding: 0 16px 0 12px;
        width: 240px;
        font-size: 14px;
        font-weight: 500;
    }
}
`
