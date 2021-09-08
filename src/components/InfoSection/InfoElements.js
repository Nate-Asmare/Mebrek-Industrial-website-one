import styled from 'styled-components'

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};
    // border: 1px solid red;

    @media screen and (max-width: 768px) {
        padding: 0px 0; //0px was 100px in the original code
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    // height: 500px;
    width: 100%;
    max-width: 1000px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 14px;    //14px was 24px in the original code
    justify-content: center;
    // border: 1px solid red;

    @media screen and (max-width: 760px) {
        height: auto;
        padding-top: 30px;
    }
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    // border: 1px solid red;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    // border: 1px solid red;
    max-width: 400px;
    max-height: 400px;
    background-size: cover;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    // border: 1px solid red;
`;

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

 export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 520px) {
        font-size: 32px;
    }
 `;

 export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
 `;

 export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
 `;

 export const ImgWrap = styled.div`
    // max-width: 555px;
    // height: 100%;
 `;

 export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    // border: 1px solid red;
    // height: 400px;
    height: auto;
    border-radius: 15px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.6);
 `;