import styled from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    width: 100%;
    padding: 74px  24px;
    margin-inline: auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 768px){
        flex-direction: column;
        align-items: center;
        gap: 24px;
        padding-block: 24px 0;
    }
`;

export const IntroContainer = styled.div`
    max-width: 368px;
    width: 100%;

    > h1 {
        margin-bottom: 16px;
        font-size: 32px;
        font-weight: 700;
        .txt--pink {
            color: var(--pink);
        }
    }
    > p {
        margin-bottom: 54px;
    }
`;

export const ImgContainer = styled.div`
    max-width: 563px;
    height: 366px;
    width: 100%;

    @media (max-width: 425px){
        height: initial;
    }
`;

export const CardsContainer = styled.section`
    max-width: 1120px;
    width: 100%;
    padding: 54px 24px;
    margin-inline: auto;

    > h2 {
        margin-bottom: 16px;
    }
    > p {
        margin-bottom: 54px;
        max-width: 500px;
    }
    
    
`;
export const CardsItems = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    flex-wrap: wrap;
`;
