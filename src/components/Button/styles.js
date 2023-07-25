import styled from "styled-components";

export const Container = styled.button`
    padding: 8px 24px;
    background-color: var(--pink);
    color: var(--white);
    font-size: 18px;
    text-align: center;
    border-radius: 25px;
    transition: background-color .2s;
    outline: 1px solid var(--pink);
    outline-offset: 3px;

    &:hover {
        background-color: var(--pink-hover);
        outline: 1px solid var(--pink-hover);
    }
`;