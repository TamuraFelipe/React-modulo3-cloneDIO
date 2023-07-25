import styled from "styled-components";

export const Container = styled.div`
    
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 0px 8px;
    margin: 16px 0px 0px;
    border-bottom: 1px solid rgb(59, 52, 80);
    background-color: transparent;
    position: relative;

    svg {
        margin-right: 0.5rem;
        color: rgb(134, 71, 173);
    }

    input {
        flex: 1 1 0%;
        background: transparent;
        border: 0px;
        outline: 0px;
        color: rgb(255, 255, 255);
        line-height: 2;
        height: 35px;
        overflow: visible;
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
    }
       
`;