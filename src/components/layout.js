import React, { useState } from 'react'
import GlobalFonts from '../fonts/fonts'
import GlobalStyle from '../components/GlobalStyle'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Footer from '../components/Footer'


const NavExtended = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  width: 100vw;
  height: 45px;
  margin-top: -40px;
  transition: .2s;
  &.openNav {
    margin-top: 0;
  }
`

const Subtitle = styled.div`
  font-family: 'Trade-Gothic';
  font-size: 1rem;
  color: #6BFF4F;
  text-align: right;
`

const StyledNavItems = styled(Link)`
  display: inline-block;
  :not(:first-child) {
    margin-left: 20px;
  }
  &.active {
    text-decoration: underline;
  }
`

const NavHome = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5.714vw;
  #nav-burger span:nth-child(1) {
    top: calc(50% + 0px);
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }

  #nav-burger span:nth-child(2) {
    top: calc(50% + 15px);
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }

  #nav-burger.open span:nth-child(1) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    top: calc(50% + -6px);
  }


  #nav-burger.open span:nth-child(2) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    top: calc(50% + px);
  }

  #nav-burger {
    width: 30px;
    height: 40px;
    position: relative;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;
    span {
      display: block;
      position: absolute;
      height: 5px;
      width: 100%;
      background: #1D1D1B;
      border-radius: 9px;
      opacity: 1;
      left: 0;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: .25s ease-in-out;
      -moz-transition: .25s ease-in-out;
      -o-transition: .25s ease-in-out;
      transition: .25s ease-in-out;
    }
  }

`

const FooterWrapper = styled.footer`
  background-color: #1D1D1B;
  color: #FFF;
  font-family: 'Trade-Gothic';
  font-size: 2rem;
  text-transform: uppercase;
`

const Contact = styled.div`

`

export default ({ children }) => {

    const [navOpen, setNav] = useState(false);

    function toggleNav() {
      if (!navOpen) setNav(true)
      else setNav(false)
    }

    return (
    <div>
      <div className="layout">
        <GlobalFonts />
        <GlobalStyle />
  
        <NavExtended className="fullWidth removeScrollbar" className={navOpen ? "openNav" : ""}>
          <div className="navExtendedWrapper">
            {/* exhibitions */}
            <StyledNavItems
              activeClassName="active" 
              to="/exhibitions"
              className="navLink">Exhibitions
            </StyledNavItems>

            {/* artists */}
            <StyledNavItems
              activeClassName="active" 
              to="/artists"
              className="navLink">Artists
            </StyledNavItems>

            {/* Publications */}
            <StyledNavItems
              activeClassName="active" 
              to="/publications"
              className="navLink">Publications
            </StyledNavItems>

            {/* Agenda */}
            <StyledNavItems
              activeClassName="active" 
              to="/agenda"
              className="navLink">Agenda
            </StyledNavItems>

            {/* Contact */}
            <StyledNavItems
              activeClassName="active" 
              to="/contact"
              className="navLink">Contact
            </StyledNavItems>

          </div>
        </NavExtended>

        <NavHome>
          <div id="nav-burger" onClick={toggleNav} className={navOpen ? "open" : ""}>
            <span></span>
            <span></span>
          </div>
          <div className="home">
            <Link to="/" className="navLink home">Von Bartha</Link>
            <Subtitle>EST. 1970</Subtitle>
          </div>
          <div></div>
        </NavHome>
        <div className="pageContent">{children}</div>
      </div>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </div>
    )
}
