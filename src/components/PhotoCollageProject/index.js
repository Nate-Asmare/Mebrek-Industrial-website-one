import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
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

const PhotoCollageProject = () => {
    return (
        <CollageContainer id="projects">
            <CollageWrapper>
                <Title>Some of our projects</Title>
                <Carousel 
                    autoPlay 
                    width="100%" 
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
                    <div>
                        <img alt="" src={image12} />
                    </div>
                    <div>
                        <img alt="" src={image13} />
                    </div>
                    <div>
                        <img alt="" src={image14} />
                    </div>
                    <div>
                        <img alt="" src={image15} />
                    </div>                    
                </Carousel>
            </CollageWrapper>
        </CollageContainer>
    )
}

export default PhotoCollageProject;
