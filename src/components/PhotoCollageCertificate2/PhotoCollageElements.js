import styled from 'styled-components';

export const CollageContainer = styled.div`
    height: auto;
    display: flex;
    justify-content: center;
    background: #F8FAFC;
    padding-top: 80px;
    
    @media screen and (max-width: 768px){
        width: 100%;
        height: auto;
        padding-top: 40px;
    }

    @media screen and (max-width: 480px){
        width: 100%;
        height: auto;
        padding-top: 40px;
    }
`;

export const CollageWrapper = styled.div`
    max-width: 640px;
    height: auto;
    padding-bottom: 20px;

    @media screen and (max-width: 768px){
        width: 100%;
        height: auto;
    }

    @media screen and (max-width: 480px){
        width: 100%;
        height: auto;
    }
`;

export const Img = styled.img`
    max-width: 600px;

    @media screen and (max-width: 768px){
        width: 100%;
        height: auto;
    }

    @media screen and (max-width: 480px){
        width: 100%;
        height: auto;
    }
`;