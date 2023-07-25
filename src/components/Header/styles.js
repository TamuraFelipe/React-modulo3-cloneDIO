import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    background-color: var(--bg-dark);
    padding: 16px 24px ;
`;

export const Content = styled.div`
    max-width: 1120px;
    margin-inline: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 425px){
        flex-direction: column;
        gap: 16px;
    }
`;

export const ImgContainer = styled.div`
    width: 65px;
    height: 25px;
`;

export const NavContainer = styled.nav`

`;
export const UlContainer = styled.ul`
    display: flex;
    align-items: center;
    gap: 16px;

    @media (max-width: 425px){
        flex-direction: column;
        justify-content: center;
    }
`;
export const LiContainer = styled.li`

`;