import React, {useState} from 'react'
import { Button } from './ButtonElements'; 
import { HeroContainer, 
         HeroContent,
         HeroH1,
         HeroP,
         HeroBtnWrapper,
         ArrowForward,
         ArrowRight
         } from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroContent>
                <HeroH1>Mebrek Industrial Engineering PLC</HeroH1>
                <HeroP>
                    We power Innovation because we are innovators.
                </HeroP>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
