import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: 'Helvetica Neue';
        src: url('src/font/HelveticaNeue-01.ttf') format('truetype');
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }
    body{
        display: flex;
        flex-direction: column;
        font-family: 'Helvetica Neue', sans-serif;
        min-height: 100vh;
    }
    a{
        list-style-type: none;
        text-decoration: none;
        color: white;
    }
`;
