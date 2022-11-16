import styled from "styled-components";


export const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 576px) {
        width: 100%;
        overflow-x: hidden !important;
        flex-direction: column;
    }

`;

export const Orders = styled.div`
    border-radius: 14px;
    background-color: #27283C;
    padding: 16px;
    margin-right: 30px;
    flex: 4;    
    height: 472px;


    @media (max-width: 576px) {
        width: 100%;
        margin-right: 0;
    }

`

export const Salary = styled.div`
    flex: 6;
    background-color: #27283C;
    padding: 16px;
    border-radius: 14px;
    height: 472px;

    @media (max-width: 576px) {
        margin-top: 81px;
        width: 95%;
    }

`;

export const Risks = styled.div`
    flex: 6;
    margin-right: 28px;
    border-radius: 14px;
    background-color: #27283C;
    padding: 16px;
    height: 472px;
`;



export const Actions = styled.div`
    flex: 4;
    border-radius: 14px;
    background-color: #27283C;
    padding: 16px;
    height: 472px;
`;

export const Caption = styled.p`
    font-size: 20px;
    letter-spacing: 0.01em;
    color: #C7C7C7;
    text-align: left;
`;

export const DimmedEmptyText = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 12px;
    letter-spacing: 0.01em;
    color: #8E8E93;

`