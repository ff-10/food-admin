import styled from "styled-components";


export const FooterBody = styled.div`
    width: 256px;
    height: 80px;
    background: #27283C;
    border-radius: 14px;
    position: fixed;
    bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 576px) {
        display: none;
    }

`;


export const DimmedInfo = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 12px;
    letter-spacing: 0.01em;
    color: #8E8E93;
`;