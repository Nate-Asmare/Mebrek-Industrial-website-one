import React from 'react';
import { ReactPhotoCollage } from "react-photo-collage";
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

const setting = {
    width: '800px',
    height: ['550px', '170px'],
    layout: [1, 4],
    photos: [
      { source: image1 },
      { source: image2 },
      { source: image3 },
      { source: image4 },
      { source: image5 },
      { source: image6 },
      { source: image7 },
      { source: image8 },
      { source: image9 },
      { source: image11 },
      { source: image9 },
    ],
    showNumOfRemainingPhotos: true
  };

const PhotoCollageCertificate = () => {
    return (
        <CollageContainer id="certificates">
            <CollageWrapper>
                <Title>Certificates</Title>
                <ReactPhotoCollage {...setting} />
            </CollageWrapper>
        </CollageContainer>
    )
}

export default PhotoCollageCertificate;
