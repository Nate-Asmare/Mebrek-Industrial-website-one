import ReactPlayer from 'react-player';
import styled from 'styled-components';

export const VideoContainer = styled.div`
    // height: 500px;
    display: felx;
    justify-content: center;
    background: #F8FAFC;
`;

export const Header = styled.h2`
    padding: 25px;
    text-align: center;
    font-weight: normal;
`;

export const VideoWrapper = styled.div`
    width: 700px;

    @media screen and (max-width: 768px){
        width: 100%;
        height: auto;
    }

    @media screen and (max-width: 480px){
        width: 100%;
        height: auto;
    }
`;

export const Video = styled.div`
    padding-bottom: 20px;
    // border: 1px solid red;
`;