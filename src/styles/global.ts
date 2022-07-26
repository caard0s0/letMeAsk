import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 62.5%;
}

body {
    background: ${props => props.theme.colors.background.primary};
    color: ${props => props.theme.colors.textColor.primary};
    font-size: 1.6rem;
}

body, input, button, textarea {
    font: 400 16px 'Roboto', sans-serif;
}

`
