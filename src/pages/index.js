import React, {useState} from 'react';
import HeroSection from '../components/HeroSection';
import IntroSection from '../components/IntroSection';
import InfoSection from '../components/InfoSection';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Footer from '../components/Footer';
import PhotoCollageProject from '../components/PhotoCollageProject';
import PhotoCollageCertificate from '../components/PhotoCollageCertificate';
import Contact from '../components/Contact';
import VideoSection from '../components/VideoSection';
import { 
    homeObjOne, 
    homeObjTwo,
    homeObjThree,
    homeObjFour, 
    homeObjFive,
    homeObjSix,
} from '../components/InfoSection/Data';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle}/> 
          <HeroSection /> 
          <IntroSection />
          <Services />
          <InfoSection {...homeObjOne} id="water-treatment"/>
          <InfoSection {...homeObjTwo} id="ETP"/>
          <InfoSection {...homeObjThree} id="Assembely"/>
          <InfoSection {...homeObjFour} id="PLC"/>
          <InfoSection {...homeObjFive} id="design"/>
          <InfoSection {...homeObjSix} id="sound"/>
          <PhotoCollageProject/>
          <PhotoCollageCertificate/>
          <VideoSection />
          <Contact />
          <Footer />
        </>
    )  
}

export default Home
