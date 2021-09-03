import React from 'react'
import { SidebarContainer,
         Icon, 
         CloseIcon,
         SidebarWrapper,
         SidebarMenu,
         SidebarLink,
         } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="info" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink to="projects" onClick={toggle}>
                        Projects
                    </SidebarLink>
                    <SidebarLink to="certificates" onClick={toggle}>
                        Certifications
                    </SidebarLink>
                    <SidebarLink to="videos" onClick={toggle}>
                        Videos
                    </SidebarLink>
                    <SidebarLink to="contacts" onClick={toggle}>
                        Contact Us
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
