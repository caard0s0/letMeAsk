import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        titleTheme: string;
        colors: {
            background: {
                primary: string;
                secondary: string;
                question: string;
                input:string;
            },
            textColor: {
                primary: string;
                details: string;
                input:string;
            },
            black: string;
            purple: {
                white:string;
                light: string;
                dark: string;
            },
            google:string;
            danger: string;
            gray: {
                dark: string;
                separator: string;
                line: string;
                medium: string;
            },
            white: {
                light: string;
                medium: string;
            },
            pink: {
                light: string;
                medium: string;
            }
        },
    }
}
