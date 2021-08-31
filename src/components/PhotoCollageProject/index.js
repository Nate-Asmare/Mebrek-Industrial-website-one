import React from 'react';
import { ReactPhotoCollage } from "react-photo-collage";
import { CollageContainer,
         CollageWrapper,
         Title,
        } from './PhotoCollageElements';   

import image1 from '../../images/collage1/image-1.jpg';
import image2 from '../../images/collage1/image-2.JPG';
import image3 from '../../images/collage1/image-3.jpg';
import image4 from '../../images/collage1/image-4.jpg';
import image5 from '../../images/collage1/image-5.jpg';
import image6 from '../../images/collage1/image-6.jpg';
import image7 from '../../images/collage1/image-7.JPG';
import image8 from '../../images/collage1/image-8.jpg';
import image9 from '../../images/collage1/image-9.JPG';
import image10 from '../../images/collage1/image-10.JPG';
import image11 from '../../images/collage1/image-11.JPG';
import image12 from '../../images/collage1/image-12.JPG';
import image13 from '../../images/collage1/image-13.JPG';
import image14 from '../../images/collage1/image-14.JPG';
import image15 from '../../images/collage1/image-15.jpg';

const setting = {
    width: '800px',
    height: ['400px', '170px'],
    layout: [1, 4],
    photos: [
      { source: image1 },
      { source: image2 },
      { source: image7 },
      { source: image4 },
      { source: image5 },
      { source: image6 },
      { source: image3 },
      { source: image8 },
      { source: image9 },
      { source: image10 },
      { source: image11 },
      { source: image12 },
      { source: image13 },
      { source: image14 },
      { source: image15 },
    ],
    showNumOfRemainingPhotos: true
  };

const PhotoCollageProject = () => {
    return (
        <CollageContainer id="projects">
            <CollageWrapper>
                <Title>Some of our projects</Title>
                <ReactPhotoCollage {...setting} />
            </CollageWrapper>
        </CollageContainer>
    )
}

export default PhotoCollageProject;
