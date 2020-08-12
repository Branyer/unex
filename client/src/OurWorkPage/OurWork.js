import React from "react";
import drmouch from "../../src/images/clients/aesthetic-surg1.PNG"
import drman from "../../src/images/clients/aesthetic-surg.PNG"
import aspire from "../../src/images/clients/aspire.PNG"
import broadway from "../../src/images/clients/broadway.PNG"
import buford from "../../src/images/clients/buford.PNG"
import denchiro from "../../src/images/clients/den-chiro.PNG"
import denverback from "../../src/images/clients/denver-back.PNG"
import dishler from "../../src/images/clients/dishler.PNG"
import iconeyecare from "../../src/images/clients/icon-eyecare.PNG"
import lander from "../../src/images/clients/lander.PNG"
import lasikvision from "../../src/images/clients/lasik-vision.PNG"
import peaches from "../../src/images/clients/peaches.PNG"
import urbancet from "../../src/images/clients/urbanvet.PNG"
import { Component } from "react";
import AnimatedNavbar from "../components/AnimatedNavbar"
import styled from "styled-components"
import { AnimatePresence, motion } from "framer-motion";
import logo from "../../src/images/Unex80x20.png"

import styles from "./ourworkStyles.module.css"


const AppContainer = styled.div`
  display: flex;
  flex-direction: column; 
  min-height: 100vh;

  > div:first-of-type {
    flex: 1 0 70vh;
  }
`
class PortfolioMain extends Component {

    state = { duration: 300 }

    onChange = data => {
        this.setState(data)
    }


    render() {
        return (
           
            <AppContainer>
                <AnimatedNavbar duration={this.state.duration} />
                <motion.div 
            initial={{ opacity:0 }}
            animate={{ opacity: 1 }}
            exit={{opacity: 0 }}>


                        <section className="containerPortfolio">
                            
                                    <div className={styles.portfolioTitle}>
                                        <h1>World-Class Designs + Results-Driven </h1>
                                    </div>
          

                                    <div id={styles.titleSummary}>
                                        <p id={styles.titleParagraph}>
                                           At the core of Unex is a digital marketing, web development, photography/video production and analytics team. Your one stop to all your digital needs</p>
                                   </div>
                                   


                        <div className={styles.wrapperPortfolio}>
                        <div className="container-portfolio">
                        <div class="content-portfolio ">
                            <a href="https://www.drmouchantat.com/" target="_blank">
                            <div class="content-overlay"></div>
                            <img class="content-image" src={drmouch} alt="link to client"/>
                            <div class="content-details fadeIn-bottom">
                                <h3 class="content-title">Plastic Surgery Site</h3>
                                <p class="content-text">Click Here To Check Out!</p>
                            </div>
                            </a>
                        </div>
                        </div>

                        <div className="container-portfolio">
                            <div class="content-portfolio ">
                                <a href="https://drmanishshah.com/" target="_blank">
                                    <div class="content-overlay"></div>
                                    <img class="content-image" src={drman} alt="link to client" />
                                    <div class="content-details fadeIn-bottom">
                                        <h3 class="content-title">Aesthetic Surgery Site</h3>
                                        <p class="content-text">Click Here To Check Out!</p>
                                    </div>
                                </a>
                            </div>
                        </div>


                        <div className="container-portfolio">
                            <div class="content-portfolio ">
                                <a href="https://denvermedispa.com/" target="_blank">
                                    <div class="content-overlay"></div>
                                    <img class="content-image" src={aspire} alt="link to client" />
                                    <div class="content-details fadeIn-bottom">
                                        <h3 class="content-title">Aesthetic Surgery Site</h3>
                                        <p class="content-text">Click Here To Check Out!</p>
                                    </div>
                                </a>
                            </div>
                        </div>


                        <div className="container-portfolio">
                            <div class="content-portfolio ">
                                <a href="https://broadwayplasticsurgery.com/" target="_blank">
                                    <div class="content-overlay"></div>
                                    <img class="content-image" src={broadway} alt="link to client" />
                                    <div class="content-details fadeIn-bottom">
                                        <h3 class="content-title">Plastic Surgery Site</h3>
                                        <p class="content-text">Click Here To Check Out!</p>
                                    </div>
                                </a>
                            </div>
                        </div>


                        <div className="container-portfolio">
                            <div class="content-portfolio ">
                                <a href="https://www.beautybybuford.com/" target="_blank">
                                    <div class="content-overlay"></div>
                                    <img class="content-image" src={buford} alt="link to client" />
                                    <div class="content-details fadeIn-bottom">
                                        <h3 class="content-title">Plastic Surgery Site</h3>
                                        <p class="content-text">Click Here To Check Out!</p>
                                    </div>
                                </a>
                            </div>
                        </div>


                        <div className="container-portfolio">
                            <div class="content-portfolio ">
                                <a href="http://madpeachesmedspa.com/" target="_blank">
                                    <div class="content-overlay"></div>
                                    <img class="content-image" src={peaches} alt="link to client" />
                                    <div class="content-details fadeIn-bottom">
                                        <h3 class="content-title">Aesthetic Surgery Site</h3>
                                        <p class="content-text">Click Here To Check Out!</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="container-portfolio">
                            <div class="content-portfolio ">
                                <a href="https://www.denverback.com/" target="_blank">
                                    <div class="content-overlay"></div>
                                    <img class="content-image" src={denverback} alt="link to client" />
                                    <div class="content-details fadeIn-bottom">
                                        <h3 class="content-title">Chiropractor Site</h3>
                                        <p class="content-text">Click Here To Check Out!</p>
                                    </div>
                                </a>
                            </div>
                        </div>




                        <div className="container-portfolio">
                            <div class="content-portfolio ">
                                <a href="https://urbanvetcare.com/" target="_blank">
                                    <div class="content-overlay"></div>
                                    <img class="content-image" src={urbancet} alt="link to client" />
                                    <div class="content-details fadeIn-bottom">
                                        <h3 class="content-title">Veterinarian Site</h3>
                                        <p class="content-text">Click Here To Check Out!</p>
                                    </div>
                                </a>
                            </div>
                        </div>



                        <div className="container-portfolio">
                            <div class="content-portfolio ">
                                <a href="https://www.dishler.com/" target="_blank">
                                    <div class="content-overlay"></div>
                                    <img class="content-image" src={dishler} alt="link to client" />
                                    <div class="content-details fadeIn-bottom">
                                        <h3 class="content-title">LASIK &amp; Laser Eye Surgery Site</h3>
                                        <p class="content-text">Click Here To Check Out!</p>
                                    </div>
                                </a>
                            </div>
                        </div>


                        <div className="container-portfolio">
                            <div class="content-portfolio ">
                                <a href="https://iconeyecare.com/" target="_blank">
                                    <div class="content-overlay"></div>
                                    <img class="content-image" src={iconeyecare} alt="link to client" />
                                    <div class="content-details fadeIn-bottom">
                                        <h3 class="content-title">LASIK &amp; Laser Eye Surgery Site</h3>
                                        <p class="content-text">Click Here To Check Out!</p>
                                    </div>
                                </a>
                            </div>
                        </div>



                        <div className="container-portfolio">
                            <div class="content-portfolio ">
                                <a href="https://www.drkeithladner.com/" target="_blank">
                                    <div class="content-overlay"></div>
                                    <img class="content-image" src={lander} alt="link to client" />
                                    <div class="content-details fadeIn-bottom">
                                        <h3 class="content-title">Facial Plastic Surgery Site</h3>
                                        <p class="content-text">Click Here To Check Out!</p>
                                    </div>
                                </a>
                            </div>
                        </div>




                        <div className="container-portfolio">
                            <div class={"content-portfolio"}>
                                <a href="https://www.lasikvisioninstitute.com/" target="_blank">
                                    <div class="content-overlay"></div>
                                    <img class="content-image" src={lasikvision} alt="link to client" />
                                    <div class="content-details fadeIn-bottom">
                                        <h3 class="content-title">LASIK &amp; Laser Eye Surgery Site</h3>
                                        <p class="content-text">Click Here To Check Out!</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className={styles.ourworkcontact}>
                        <h1 className={styles.contactbackground}>Like what you see?
                           <br/> Find out how we can help</h1>
                        
                           <div className={styles.ourworkcontactButton}>
                            <a href="/contact">
                               CLICK HERE &ensp; >
                            </a>
                            </div> 
                       </div>


                       <div className={styles.footerwrapper}>

                            <div className={styles.footernumber}>
                                <p>619-765-8277</p>
                            </div>

                            <div className={styles.footerlogo}>

                            <img id="logo-footer" width="150px" height="60px" src={logo}  alt="company logo"/>
                            <p className="copyrights-info">© 2020 Unex Marketing™ All Rights Reserved Privacy Policy</p>
                            </div>

                            <div className={styles.companyemail}>
                                <p> info@unexmarketing.com </p>
                            </div>


                        </div>

                    </div>

                </section>
                </motion.div>
            </AppContainer>


        )
    }
}


export default PortfolioMain