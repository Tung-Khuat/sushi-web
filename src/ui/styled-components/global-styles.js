import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
a {
    text-decoration: none;
    color: inherit;
}

body {
    margin: 0;
    font-family: Proxima Nova Regular, sans-serif;
    font-size: 19px;
    overflow-x: hidden;
}

html {
    scroll-behavior: smooth;
}

* {
    margin: 0; 
    padding: 0;
    &:focus, &:visited {
        outline: none;
    }
}

`
export default GlobalStyles;