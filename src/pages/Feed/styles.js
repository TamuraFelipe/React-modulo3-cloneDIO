import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 32px 24px;
    margin-inline: auto;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media (max-width: 768px){
        flex-direction: column;
        align-items: center;
        gap: 16px;
    }
`;

export const FeedContainer = styled.section`
    max-width: 800px;
    width: 100%;

    > h2 {
        margin-bottom: 24px;
    }

    @media (max-width: 768px){
        order: 1;
    }
`;
export const FeedContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const RankingContainer = styled.section`
    max-width: 270px;
    width: 100%;

    > h2 {
        font-size: 18px;
        color: rgba(255, 255, 255, 0.70);
        margin-bottom: 24px;
    }
`;