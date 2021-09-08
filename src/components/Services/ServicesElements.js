import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const ServicesContainer = styled.div`
    // height: 650px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #F8FAFC;
    // border: 1px solid red;
    padding-bottom: 25px;

`;

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 8px auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    // border: 1px solid green;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 530px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    border-radius: 10px;
    max-height: 250px;
    max-width: 350px;
    padding: 20px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.6); //horizontal effect, vertical effect, blure radious, color
    transition: all 0.2s ease-in-out;
    // border: 1px solid black;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 768px){
        padding: 5px;
        max-height: 200px;
    }

    @media screen and (max-width: 480px){
        padding: 5px;
        max-height: 200px;
    }
`;

export const ServicesIcon = styled.img`
    height: 120px;
    width: 120px;
    margin-bottom: 10px;
    padding: 10px;
    // border: 1px solid red;

    @media screen and (max-width: 768px){
        height: 80px;
        width: 80px;
    }

    @media screen and (max-width: 480px){
        height: 80px;
        width: 80px;
    }
`;

export const ServicesH1 = styled.p`
    font-size: 2.3rem;
    color: #13171C;
    margin-bottom: 14px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    text-align: center;
    color: #335525;
`;

export const ServiceLinks = styled(LinkS)`
    // text-decoration: underline;
    text-transform: uppercase;
    color: #154734;
    border-bottom: 2px solid #FE5000;
`;