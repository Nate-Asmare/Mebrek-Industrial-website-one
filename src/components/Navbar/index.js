import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink 
} from './NavbarElements';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 5){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}> {/*this is to change the icon color on Navbar*/}
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={toggleHome}>
                            MEBREK
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars color="#222"/>
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks 
                                    to="info"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-60}
                                    >About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                    to="services"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-60}
                                    >Services</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                    to="projects"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-60}
                                    >Projects</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                    to="certificates"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-60}
                                    >Certifications</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                    to="videos"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-60}
                                    >Videos</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink 
                                    to="contacts"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'>Contact Us</NavBtnLink>
                        </NavBtn>
                    </NavbarContainer >
                </Nav>
            </IconContext.Provider> 
        </>
    )
}

export default Navbar
 