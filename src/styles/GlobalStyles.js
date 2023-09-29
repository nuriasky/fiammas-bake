import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --primary-pink: #f28482;
        --secondary-green: #bbb385;
        --light-pink: #f5cac3;
        --black-text: #0D0D0D;
        --dark-bg: #6f5f5e;
        --light-bg: #f7ede2;
    }

    * {
        /* margin: 0;
        padding: 0; */
        box-sizing: border-box; 
        font-family: 'Manrope';
        background-color: #FFFAFA;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
        color: white;
    }

    a:visited {
        color: white;
    }

    li {
        list-style: none;
    }
`