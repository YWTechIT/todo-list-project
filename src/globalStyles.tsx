import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    body{
        background-color: ${(props) => props.theme.bodyBg};
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        transition: all 0.25s linear;
    }

    main,article,section,footer{
        color: ${(props) => props.theme.text};
    }

    p,span{
        color: ${(props) => props.theme.text};
    }

    h1,h2,h3,h4,h5,h6{
        color: ${(props) => props.theme.text};
        margin: 0px 0px;
    }
    
    ol,li{
        color: ${(props) => props.theme.text};
        padding: 0px 8px;
    }
    
`;
