import React from 'react';
import ReactPlayer from 'react-player';
import video1 from '../../video/video1.MP4';
import { VideoContainer,
         VideoWrapper,
         Video,
         Header,
        } from './VideoElements';  

const VideoSection = () => {
    return (
        <VideoContainer id="videos">
            <VideoWrapper>
                <Header>Some of our videos</Header>
                <Video>
                    <ReactPlayer 
                        width="100%"
                        url="https://youtu.be/s056B3WaWYU"/>
                </Video>   
                <Video>
                    <ReactPlayer 
                        width="100%"
                        url="https://youtu.be/W0o_K_UYRUo"/>
                </Video>  
                {/* <Video>
                    <ReactPlayer 
                        width="100%"
                        url="https://www.youtube.com/watch?v=EIm4HvDgQCM"/>
                </Video>   */}
            </VideoWrapper>
        </VideoContainer>
    )
}

export default VideoSection
