import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';
import banner from '../../images/wall.jpg';

export const HeroContainer = styled.div`
    background-image: url(${banner});
    background-position: center;
    background-size: cover;
    // background-repeat: no-repeat;
    // background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 400px;
    position: relative;
    z-index: 1;
    
    @media screen and (max-width: 768px){
        background-image: url(${banner});
        background-position: center;
        background-size: cover;
        height: 300px;
    // background-repeat: no-repeat;
    // background-attachment: fixed;
    }

    @media screen and (max-width: 480px){
        background-image: url(${banner});
        background-position: center;
        background-size: cover;
        height: 300px;
    }
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    // justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    // border: 1px solid red;

    @media screen and (max-width: 768px){
        align-items: flex-start;
    }

    @media screen and (max-width: 480px){
        align-items: left;
    }
`;

export const HeroH1 = styled.h1`
    font-size: 38px;
    text-align: center;
    border: 1px solid #fff;
    border-radius: 10px;
    padding: 0 15px 9px 15px;
    background: rgba(248,250,252,0.8);
    // color: #333;
    color: #13171C;

    @media screen and (max-width: 768px){
        font-size: 38px;
        background: rgba(248,250,252,0.6);
        text-align: left;
    }

    @media screen and (max-width: 500px){
        font-size: 28px;
        text-align: left;
        width: 75%;
    }
`;

export const HeroP = styled.p`
    margin-top: 24px;
    font-size: 24px;
    text-align: center;
    max-width: 650px;
    // border: 1px solid red;
    border-radius: 8px;
    padding: 4px 15px 6px 15px;
    background: rgba(255,255,255,0.6);
    color: #111;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`;
