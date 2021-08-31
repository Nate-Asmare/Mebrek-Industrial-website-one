import React from 'react'
import { ContactContainer,
         ContactWrapper,
         ContactForm,
         Contacts,
         ContactBlocks,
         ContactIcon,
         ContactH2,
         ContactDetails,
         Header,
         Name,
         Email,
         Message,
         Button,
        } from './ContactElements';
import location from '../../images/location.svg';
import phone from '../../images/phone.svg';
import fax from '../../images/fax.svg';
import mail from '../../images/mail.svg';

const Contact = () => {
    return (
        <ContactContainer id="contacts">
            <ContactWrapper>
                <ContactForm>
                    <Header>Contact Us</Header>
                    <Name placeholder={" Your name here"}/>
                    <Email placeholder={" Your email address here"}/>
                    <Message placeholder={" message"}/>
                    <Button>Submit</Button>
                </ContactForm>
                <Contacts>
                    <ContactBlocks>
                        <ContactIcon src={location}/>
                        <ContactH2>Our Office</ContactH2>
                        <ContactDetails>Kebena square, near Brihan bank</ContactDetails>
                    </ContactBlocks>
                    <ContactBlocks>
                        <ContactIcon src={phone}/>
                        <ContactH2>Phone number</ContactH2>
                        <ContactDetails>+251 11853347 +251930006325</ContactDetails>
                    </ContactBlocks>
                    <ContactBlocks>
                        <ContactIcon src={fax}/>
                        <ContactH2>Fax</ContactH2>
                        <ContactDetails>+251 111261699</ContactDetails>
                    </ContactBlocks>
                    <ContactBlocks>
                        <ContactIcon src={mail}/>
                        <ContactH2>Email</ContactH2>
                        <ContactDetails>mebrekieeth@gmail.com</ContactDetails>
                    </ContactBlocks>
                    {/* <Location />
                    <PhoneNumber />
                    <Fax />
                    <Email /> */}
                </Contacts>
            </ContactWrapper>
        </ContactContainer>
    )
}

export default Contact
