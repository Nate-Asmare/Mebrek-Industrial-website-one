import styled from "styled-components";

export const InfoContainer = styled.div`
    height: 650px;
    background: #F8FAFC;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 768px){
        height: auto;
        padding: 15px 0;
    }

    @media screen and (max-width: 480px){
        height: auto;
        padding: 15px 0;
    }    
`;

export const InfoWrapper = styled.div`
    max-width: 1100px;
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 50px;

    @media screen and (max-width: 768px){
        padding: 0 15px;
    }

    @media screen and (max-width: 480px){
        padding: 0 15px;
    }
`;

export const Title = styled.p`
    text-align: center;
    font-size: 40px;

    @media screen and (max-width: 768px){
        font-size: 35px;
    }

    @media screen and (max-width: 480px){
        font-size: 35px;
    }
`;

export const IntroText = styled.p`
    padding: 30px 0;
    font-size: 22px;
    text-align: justify;
    line-height: 1.5;

    @media screen and (max-width: 768px){
        font-size: 16px;
        line-height: 1.2;
        padding: 15px 0;
    }

    @media screen and (max-width: 480px){
        font-size: 16px;
        line-height: 1.2;
        padding: 15px 0;
    }
`;