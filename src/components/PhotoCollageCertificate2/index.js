import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { CollageContainer,
         CollageWrapper,
         Img,
        } from './PhotoCollageElements';   

import image6 from '../../images/collage2/certificate6.jpg';

const PhotoCollageCertificate = () => {
    return (
        <CollageContainer id="certificates">
            <CollageWrapper>
                <Img src={image6} />
            </CollageWrapper>
        </CollageContainer>
    )
}

export default PhotoCollageCertificate;
