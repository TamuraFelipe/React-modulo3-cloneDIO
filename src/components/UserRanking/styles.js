import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;

    > div {
        display: flex;
        flex-direction: column;
        width: 100%;

        .barra-percentual {
            width: 100%;
            height: 8px;
            background-color: #f2f2f2;
            border-radius: 5px;
            overflow: hidden;
        }

    /* Estilo da porção colorida da barra de progresso */
        .progresso {
            height: 100%;
            background-color: #4caf50;
        }
    }
`;