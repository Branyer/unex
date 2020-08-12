import React, { Component } from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Logo from "../../images/Unex80x20.png";
import "../../main.css";

const NavbarEl = styled.nav`
  margin: auto;
  // position: fixed; 
  // top: 0;
  // width: 100%;
  // z-index:1;
  
`

const NavbarList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;

`


class Navbar extends Component {


  render() {
    const { children, onMouseLeave } = this.props
    return (
      <NavbarEl onMouseLeave={onMouseLeave}>
        <NavbarList> 
        <Link to="/"><img id="unex-logo" src={Logo} alt="my logo"/></Link>
          <Link to="/services">{children} </Link>
        <Link to="/ourwork"className="jDsNIX"> Our Work </Link>
          <Link to="/contact" className="jDsNIX"> Contact </Link>
          <a href="tel:619-765-8277" id="nav-phone-button" className="jDsNIX"> <h1>619-765-8277</h1> </a>
          <div id="nav-start-button" className="full-services-button">
            <Link to="/contact">
              Start Your Project &ensp; >
                </Link>
          </div>
        </NavbarList>

      </NavbarEl>
    )
  }
}

export default Navbar
