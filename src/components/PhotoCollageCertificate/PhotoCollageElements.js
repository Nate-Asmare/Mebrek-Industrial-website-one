import styled from 'styled-components';

export const CollageContainer = styled.div`
    height: auto;
    display: flex;
    justify-content: center;
    background: #F8FAFC;
    
    @media screen and (max-width: 768px){
        width: 100%;
        height: auto;
    }

    @media screen and (max-width: 480px){
        width: 100%;
        height: auto;
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

export const Title = styled.p`
    font-size: 20px;
    text-align: center;
    padding: 25px;
`;