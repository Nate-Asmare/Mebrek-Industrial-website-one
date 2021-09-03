import styled from 'styled-components'

import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import { FaRegBell, FaRegClipboard } from 'react-icons/fa';

 export const Nav = styled.nav`
    // background: rgba(230,230,230,0.96);
    background: #F8FAFC;
    height: 60px;
    margin-top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    // border: 1px solid red;
    // width: 100%;

    @media screen and (max-width: 960px) {
        transition: 0.8 all ease;
    }
 `;

 export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
    // border: 1px solid red;
 `;

 export const NavLogo = styled(LinkR)`
    color: #222;
    color: #CD001A;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    // font-weight: bold;
    text-decoration: none;
    // border: 1px solid red;
 `;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: black;
        // border: 1px solid red;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    // border: 1px solid red;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
    // border: 1px solid red;
`;

export const NavLinks = styled(LinkS)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    // height: 100%;
    cursor: pointer;
    border: 1px solid rgb(2,2,2);
    margin: 22px 8px 0px 8px;
    border-radius: 17px;
    font-size: 15px;

    &.active {
        border: 1px solid #FE5000;
    }
    &:hover {
        background:#222;
        color: #fff;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    // border: 1px solid red;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkS)`
    border-radius: 50px;
    background: #222;
    white-space: #nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    box-sizing: padding-box;
    border: 1px solid #222;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #F8FAFC;
        color: #222;
    }
`