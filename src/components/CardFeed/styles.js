import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: #3B4651;
    border-radius: 8px;

    p {
        font-size: 12px;
    }
    span {
        font-size: 12px;
        font-weight: 700;
    }
`;
export const User = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 8px;
    padding: 12px;

    > img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 2px solid #fff;
    }
`;
export const Description = styled.div`
    padding: 12px;

    > p {
        margin-bottom: 12px;

        a {
            color: #fff;
            font-weight: 700;
        }
    }

    > span {
        margin-left: 32px;
    }
`;