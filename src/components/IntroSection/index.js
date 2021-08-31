import React from 'react';
import { InfoContainer,
         InfoWrapper,
         Title,
         IntroText,
        } from './IntroElements';

const index = () => {
    return (
        <InfoContainer id="info">
            <InfoWrapper>
                <Title>Introduction</Title>
                <IntroText>
                Mebrek Industrial Engineering is a company that was founded 30 years ago by Mr Cherenet Kebede. When the company was founded it was manly working on maintaining different electronic devices. From that point on the company has grown to become a large technological hub. The company is now working on it’s own machine designs like the electromechanical water treatment solutions for large industry waste management, in house built ventleter machines to help with the corona pandemic. Alongside the cutting edge innovative work the company also works in factory machine assembly and plant installation, developing new machine design based on our customer requirements, PLC programming for factory machinery and heavy machinery like the excavator. The company has received many awards from the Ministry of science and technology of Ethiopia for its many achievements.  We are continually working towards improving and leading with the cutting edge technology, we are aspiring to become one of the biggest technology companies in the country.
                </IntroText>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default index
