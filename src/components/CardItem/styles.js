import styled from "styled-components";

export const Container = styled.div`
    max-width: 340px;
    width: 100%;
    padding: 24px;
    border-radius: 16px;
    background-color: var(--bg-card);
    box-shadow: var(--shadow);
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 24px;

    > button {
        text-transform: uppercase;
        width: max-content;
    }
`;