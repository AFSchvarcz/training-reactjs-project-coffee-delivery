import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    :focus{
        outline: 0;
        box-shadow: 0;
        //box-shadow: 0 0 0 2px white;
    }

    body {
        background-color: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors["base-text"]};
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font-family: 'Roboto', sans-serif;
        font-weight: ${(props) => props.theme.fontWeight["roboto-regular"]};
        font-size: ${(props) => props.theme.fontSize["text-md"]};
        line-height: 130%;
    }

    body strong {
        font-weight: ${(props) => props.theme.fontWeight["roboto-bold"]};
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Baloo 2', sans-serif;
        font-weight: ${(props) => props.theme.fontWeight["baloo-bold"]};
        font-size: ${(props) => props.theme.fontSize["title-md"]};
        line-height: 130%;
    }

    h1, h2, h3, h4, h5, h6 strong {
        font-weight: ${(props) => props.theme.fontWeight["baloo-extra"]};
    }
`;
