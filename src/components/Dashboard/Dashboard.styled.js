import styled from "styled-components";




export const DashboardBody = styled.div`
    position: absolute;
    right: 0;
    width: 84%;
    top: 90px;
    color: #FFF;
`;

export const FlexContainer = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and(max-width: 576px) {
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

`

export const Salary = styled.div`
    flex: 6;
    background-color: #27283C;
    padding: 16px;
    border-radius: 14px;
`;

export const Risks = styled.div`
    flex: 6;
    margin-right: 28px;
    border-radius: 14px;
    background-color: #27283C;
    padding: 16px;
`;



export const Actions = styled.div`
    flex: 4;
    border-radius: 14px;
    background-color: #27283C;
    padding: 16px;
`;

export const Caption = styled.p`
    font-size: 20px;
    letter-spacing: 0.01em;
    color: #C7C7C7;
    text-align: left;
`