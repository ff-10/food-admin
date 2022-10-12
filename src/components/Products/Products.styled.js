import styled from "styled-components";

export const ProductsBody = styled.div`

    position: absolute;
    right: 0;
    width: 84%;
    top: 90px;
    color: #FFF;
    z-index: 999;

@media (max-width: 576px) {
        padding:10px;
        position: relative;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0 auto;
        width: 100%;
    }
`;


export const ProductsHeader = styled.div`
    height: 73px;
    background: #27283C;
    border-radius: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 52px;
`;

export const HeaderCaption = styled.p`
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    letter-spacing: 0.01em;
    color: #C7C7C7;
`;

export const CardContainer = styled.div`
    margin-top: 52px;
    display: flex;
    flex-wrap: wrap;
    background-color: red;
`;



export const PaginationBody = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

`;