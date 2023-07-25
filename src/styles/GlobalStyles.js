import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        border: none;
    }
    :root {
        --bg-body: #1E192C;
        --bg-dark: #151515;
        --bg-card: rgba(255, 255, 255, 0.05);

        --shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;

        --white: #fff;
        --pink: #e4105d;
        --gray: #565656;
        --green: #23DD7A;

        --gray-hover: #404040;
        --pink-hover: #A50E45;
    }
    #root {
        height: 100vh;
        display: flex;
        flex-direction: column;
    }
    body {
        background-color: #1E192C;
        height: 100vh;
        font-family: 'Open Sans', Arial, Helvetica, sans-serif;
        color: #fff;
        font-size: 16px;
    }
    img {
        display: block;
        width: 100%;
    }
    button {
        cursor: pointer;
    }
    label {
        position: absolute;
        left: -9999px;
        top: -9999px;
    }
    .link--yellow {
        color: #E5E044;
        font-size: 16px;
    }
    .link--green {
        color: #23DD7A;
        font-size: 16px;
    }
    .link--bg-gray {
        background-color: var(--gray);
        padding: 0 50px;
        border-radius: 25px;
        transition: background-color .3s;
        &:hover {
            background-color: var(--pink-hover);
        }
    }
    /* Custom Scroll */
    ::-webkit-scrollbar {
        width: 8px;
    }
    ::-webkit-scrollbar-thumb {
        background: var(--pink);
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: var(--dark);
    }
`;