import styled from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    width: 100%;
    padding-block: 72px;
    padding-inline: 24px;
    margin-inline: auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-grow: 2;

    > h1 {
        max-width: 565px;

        @media (max-width: 768px) {
            display: none;
        }
    }

    > form {
        max-width: 370px;
        width: 100%;

        h2 {
            margin-bottom: 16px;
        }
        p{
            margin-bottom: 35px;
        }
        span {
            font-size: 12px;
            color: var(--pink);
        }
        
        button {
            width: 100%;
            margin-top: 70px;
        }
    }

    @media (max-width: 768px) {
        justify-content: center;
    }
`;

export const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 80px;
    border: none;

    a:hover {
        text-decoration: underline;
    }
`;
