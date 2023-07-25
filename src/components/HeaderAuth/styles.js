import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    background-color: var(--bg-dark);
    padding: 16px 24px ;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    gap: 32px;
    
    @media (max-width: 425px){
        flex-direction: column;
        gap: 16px;
    }
`;

export const Wrapper = styled.div`
    max-width: 1120px;
    width: 100%;
    margin-inline: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ImgContainer = styled.div`
    width: 65px;
    height: 25px;

    display: flex;
    align-items: center ;
`;

export const InputContent = styled.div`
    max-width: 275px;
    height: 30px;
    border-radius: 8px;
    background-color: #2D2D37;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 0 12px;
    > input {
        background-color: transparent;
        color: #fff;
        padding-left: 4px;
        height: 30px;
    }
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

export const UserOpt = styled.div`
    position: relative;
    display: flex;
    align-items: center;

    > img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 2px solid #fff;
    }

    > button {
        background-color: transparent;
    }

    .user-menu {
        display: block;
        position: absolute;
        top: 55px;
        right: 0;
        background-color: var(--bg-dark);
        height: 0;
        overflow: hidden;
        transition: height 0.3s ease;

        
        &.open {
            height: 225px;
        }
        
        
        li {
            padding: 16px 24px;

            a {
                color: #fff;
                display: flex;
                align-items: center;
                gap: 4px;
            }
        }
    }
`;