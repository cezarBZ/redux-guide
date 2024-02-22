import { createGlobalStyle } from "styled-components";
const ResetStyles = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        font-family: sans-serif;
        /* background-color: red; */
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }
`;

export default ResetStyles
