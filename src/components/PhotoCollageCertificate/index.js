import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { CollageContainer,
         CollageWrapper,
         Title,
        } from './PhotoCollageElements';   

import image1 from '../../images/collage2/certificate1.jpg';
import image2 from '../../images/collage2/certificate2.jpg';
import image3 from '../../images/collage2/certificate3.jpg';
import image4 from '../../images/collage2/certificate4.jpg';
import image5 from '../../images/collage2/certificate5.jpg';
import image6 from '../../images/collage2/certificate6.jpg';
import image7 from '../../images/collage2/certificate7.jpg';
import image8 from '../../images/collage2/certificate8.jpg';
import image9 from '../../images/collage2/certificate9.jpg';
import image10 from '../../images/collage2/certificate10.jpg';
import image11 from '../../images/collage2/certificate11.jpg';

const PhotoCollageCertificate = () => {
    return (
        <CollageContainer id="certificates">
            <CollageWrapper>
                <Title>Certificates</Title>
                <Carousel 
                    autoPlay width="100%" 
                    dynamicHeight="false"
                    infiniteLoop="true"
                    >
                    <div>
                        <img alt="" src={image1} />
                    </div>
                    <div>
                        <img alt="" src={image2} />
                    </div>
                    <div>
                        <img alt="" src={image3} />
                    </div>
                    <div>
                        <img alt="" src={image4} />
                    </div>
                    <div>
                        <img alt="" src={image5} />
                    </div>
                    <div>
                        <img alt="" src={image6} />
                    </div>
                    <div>
                        <img alt="" src={image7} />
                    </div>
                    
                    <div>
                        <img alt="" src={image9} />
                    </div>
                    <div>
                        <img alt="" src={image10} />
                    </div>
                    <div>
                        <img alt="" src={image11} />
                    </div>
                </Carousel>
            </CollageWrapper>
        </CollageContainer>
    )
}

export default PhotoCollageCertificate;
