import React from 'react';
import Icon1 from '../../images/svg-2.svg';
import Icon2 from '../../images/svg-1.svg';
import Icon3 from '../../images/svg-3.svg';
import Icon4 from '../../images/plc.jpg';
import Icon5 from '../../images/svg-5.svg';
import Icon6 from '../../images/svg-6.svg';
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP,
    ServiceLinks,
} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Electromechanical Water Treatment solution</ServicesH2>
                    <ServiceLinks 
                                    to="water-treatment"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-60}
                                    >More</ServiceLinks>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Industrial ETP Manufacuring And Assembly</ServicesH2>
                    <ServiceLinks 
                                    to="ETP"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-60}
                                    >More</ServiceLinks>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Factory Machine Assembly & Maintainacne</ServicesH2>
                    <ServiceLinks 
                                    to="Assembely"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-60}
                                    >More</ServiceLinks>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon4}/>
                    <ServicesH2>PLC Programing</ServicesH2>
                    <ServicesH2></ServicesH2>
                    <ServicesH2></ServicesH2>
                    <ServicesH2></ServicesH2>
                    <ServiceLinks 
                                    to="PLC"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-60}
                                    >More</ServiceLinks>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon5}/>
                    <ServicesH2>Electronics Machinary Design & Manufacturing</ServicesH2>
                    <ServicesH2></ServicesH2>
                    <ServiceLinks 
                                    to="design"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-60}
                                    >More</ServiceLinks>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon6}/>
                    <ServicesH2>Sound system equipment manufacture, installation and maintenance</ServicesH2>
                    <ServiceLinks 
                                    to="sound"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-60}
                                    >More</ServiceLinks>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
