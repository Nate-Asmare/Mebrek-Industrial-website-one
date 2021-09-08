import styled from 'styled-components';

export const ContactContainer = styled.div`
    height: auto;
    background: #F8FAFC;
    display: flex;
    justify-content: center;
    // padding-bottom: 20px;
`;

export const ContactWrapper = styled.div`
    max-width: 1000px;
    // border: 1px solid red;
    width: 100%;
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col2 col1';

    @media screen and (max-width: 805px) {
        grid-template-areas: 'col1' 'col2';
    }

    @media screen and (max-width: 480px){
        width: 100%;
        height: auto;
    }
`;

export const Contacts = styled.div`
    grid-area: col2;
    // border: 1px solid green;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 10px;
    margin: 10px;
`;

export const ContactBlocks = styled.div`
    // border:1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 25px;
    border-radius: 15px;
    background: #fff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.6); //horizontal effect, vertical effect, blure radious, color

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 768px){
        padding: 5px;
    }

    @media screen and (max-width: 480px){
        padding: 5px;
    }
`;

export const ContactIcon = styled.img`
    // border: 1px solid red;
    margin: 0 auto;
    max-width: 70px;
    padding: 15px;

    @media screen and (max-width: 768px){
        max-width: 40px;
        padding: 7px;
    }

    @media screen and (max-width: 480px){
        max-width: 40px;
        padding: 7px;
    }
`;

export const ContactH2 = styled.h2`
    text-align: center;
    text-transform: uppercase;
    font-size: 1.2em;
    font-weight: normal;
`;

export const ContactDetails = styled.p`
    text-align: center;
    margin: 8px;
`;


export const ContactForm = styled.form`
    grid-area: col1;
    // border: 1px solid blue;
    // height: 100%;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 25px;
    border-radius: 15px;
    background: rgba(255, 109, 106,0.3);
    box-shadow: 0 1px 3px rgba(0,0,0,0.6);

    @media screen and (max-width: 768px){
        padding: 10px 15px;
    }

    @media screen and (max-width: 480px){
        padding: 10px 15px;
    }
`;

export const Header = styled.h2`
    text-align: center;
    margin: 25px;
    font-size: 1.5em;
    font-weight: normal;
`;

export const Name = styled.input`
    margin: 8px 45px;
    height: 30px;
    border-radius: 8px;
    padding-left: 10px;
    width: 90%;

    @media screen and (max-width: 805px){
        margin: 8px 5px;
        width: 60%;
    }

    @media screen and (max-width: 480px){
        margin: 8px 5px;
        width: 90%;
    }
`;

export const Email = styled.input`
    margin: 8px 45px;
    height: 30px;
    border-radius: 8px;
    padding-left: 10px;
    width: 90%;

    @media screen and (max-width: 805px){
        margin: 8px 5px;
        width: 60%;
    }

    @media screen and (max-width: 480px){
        margin: 8px 5px;
        width: 90%;
    }
`;
export const Message = styled.textarea`
    margin: 8px 45px;
    height: 100px;
    border-radius: 8px;
    padding-left: 10px;
    width: 90%;

    @media screen and (max-width: 805px){
        margin: 8px 5px;
        width: 60%;
    }

    @media screen and (max-width: 480px){
        margin: 8px 5px;
        width: 90%;
    }
`;

export const Button = styled.button`
    max-width: 100px;
    margin: 10px auto 0 auto;
    padding: 8px 15px;
    border-radius: 15px;
    background: #FD003A;
    color: #fff;
    border: 1px solid #FD003A;
    box-shadow: 0 1px 3px rgba(0,0,0,0.6);

    &:hover {
        background: #fff;
        color: #222;
    }
`;