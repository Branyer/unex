import React, { Component } from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router,Switch,Route}
from "react-router-dom";
import AnimatedNavbar from "./components/AnimatedNavbar"
import styled from "styled-components"
import Frontpage from "./Frontpage/Frontpage";
import Customers from "./Frontpage/Customers";
import Quote from "./Frontpage/Quote";
import Plan from "./Frontpage/Plan";
import PortfolioMain from "./Frontpage/Portfolio-main";
import Contact from "./Frontpage/Contact";
import Footer from "./Frontpage/Footer";
import Services from "./ServicesPage/Services";
import { AnimatePresence, motion } from "framer-motion";

// import Quote from "./components/Pages/Frontpage/Quote"


// import Customers from "./Pages/Frontpage/Customers"
import Brandsolutions from "./Frontpage/Brandsolutions"

import "./main.css"
// import Slider from "react-slick";
// import { Router } from "express";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column; 
  min-height: 100vh;

  > div:first-of-type {
    flex: 1 0 70vh;
  }
`

class App extends Component {
  state = { duration: 300 }

  onChange = data => {
    this.setState(data)
  }

  render() {
    return (
      <div className="myContainer">
  
      <AppContainer >

       
        <AnimatedNavbar duration={this.state.duration} />
        
        <motion.div 
            initial={{ opacity:0, height: '25vh' }}
            animate={{ opacity: 1 }}
            exit={{opacity: 0 }}>
        
        <Frontpage />
        <Customers />
        <Brandsolutions />
        <Quote />
        <Plan />
        <PortfolioMain />
        <Contact />
        <Footer />
        </motion.div>
      </AppContainer>


      </div>
    )
  }
}

export default App;
