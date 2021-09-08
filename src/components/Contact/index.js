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
                <ContactForm target="_blank" action="https://formsubmit.co/mebrekieeth@gmail.com" method="POST">
                    <Header>Contact Us</Header>
                    <Name type="text" name="name" placeholder={" Your name here"} required/>
                    <Email type="email" name="email" placeholder={" Your email address here"} required/>
                    <Message name="message" placeholder={" message"} required/>
                    <Button type="submit">Submit</Button>
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
