import React, { Component } from "react";
import camera from "../../src/images/servicesicons/ar-camera.png"
import coding from "../../src/images/servicesicons/coding.png"
import copywriting from "../../src/images/servicesicons/contract.png"
import text from "../../src/images/servicesicons/essay.png"
import video from "../../src/images/servicesicons/film.png"
import globe from "../../src/images/servicesicons/global.png"
import mail from "../../src/images/servicesicons/mail.png"
import sms from "../../src/images/servicesicons/add.png"
import digitalmark from "../../src/images/servicesicons/website-design.png"
import stats from "../../src/images/servicesicons/stats.png"
import logo from "../../src/images/Unex80x20.png"


import styled from "styled-components"
import AnimatedNavbar from "../components/AnimatedNavbar"
import { AnimatePresence, motion } from "framer-motion";
import styles from "./servicesStyles.module.css"

const AppContainer = styled.div`
  display: flex;
  flex-direction: column; 
  min-height: 100vh;

  > div:first-of-type {
    flex: 1 0 70vh;
  }
`

// const heading = {
//       fontSize:"1em",
//   backgroundColor: "#08aeea",
//   backgroundImage: "linear-gradient(45deg, #09009f 0%, #00ff95 80%)",
//   webkitBackgroundClip: "text",
// webkitTextFillColor: "transparent"
// }


class Services extends Component {

    state = { duration: 300 }

    onChange = data => {
        this.setState(data)
    }

    render() {
        return (

                <section className={styles.serviceContainer}>
                    <AnimatedNavbar duration={this.state.duration} />

                    <motion.div 
            initial={{ opacity:0,  height: '5vh' }}
            animate={{ opacity: 1 }}
            exit={{opacity: 0 }}>

                    <div className={styles.textTitle}>
                    We offer one integrated approach for all your digital marketing needs                    </div>

                    <div className={styles.planSummary}>
                        <p className={styles.planParagraph}>
                        At the core of Unex is a digital marketing, web development, photography/video production and analytics team. Your one stop to all your digital needs</p>
                    </div>

                    <div className={styles.stepsContainer}>
                        <div className={styles.stepBox}>
                            <div className={styles.stepBoxIcon}>
                                <span className="icon-plan"><img src={digitalmark} alt="services" /></span>

                            </div>
                            <div className={styles.stepBoxContent}>
                                <h3>Digital Advertising </h3>
                                <p>In competitive medical specialties, digital patient acquisition may require a paid advertising strategy. We target and optimize our campaigns with surgical accuracy.</p>
                                <span className={styles.line}></span>
                                <p className={styles.keypoints}>
                                - Stakeholder persona development
                                    <br/>
                                - Channel &amp; targeting strategy
                                    <br/>
                                - Email marketing
                                    <br/>
                                - Content marketing
                                </p>
                            </div>
                        </div>

                        <div className={styles.stepBox}>
                            <div className={styles.stepBoxIcon}>
                                <span className="icon-plan"><img src={coding} alt="services" /></span>
                            </div>
                            <div className={styles.stepBoxContent}>
                                <h3>Website Design &amp; Development</h3>
                                <p>We create stellar user experience along with a well-optimized website. We create visually striking medical websites that outperform in search and user conversion.</p>
                                <span className={styles.line}></span>
                                <p className={styles.keypoints}>
                               - UI &amp; UX development 
                                    <br/>
                               - Custom templates to choose from
                                    <br/>
                               - We create any type of Widgets &amp; Features your company needs
                                    <br/>
                                </p>
                            </div>
                        </div>

                        <div className={styles.stepBox}>
                            <div className={styles.stepBoxIcon}>
                                <span className="icon-plan"><img src={globe} alt="services" /></span>
                            </div>
                            <div className={styles.stepBoxContent}>
                                <h3>Search Engine Optimization</h3>
                                <p>Over 93 million Americans turn to online search for their health-related needs. Are they finding you? As a marketing agency, We don’t just “do” SEO – we excel at it.</p>
                                <span className={styles.line}></span> 
                                <p className={styles.keypoints}>
                               - SEM/PPC campaigns
                                    <br/>
                               - SEO &amp; site optimization
                                    <br/>
                               - Mobile SEO
                                    <br/>
                               - Technical SEO


                                </p>
                            </div>
                        </div>

                        <div className={styles.stepBox}>
                            <div className={styles.stepBoxIcon}>
                                <span className="icon-plan"><img src={camera} alt="services" /></span>
                            </div>
                            <div className={styles.stepBoxContent}>
                                <h3>Photography &amp; Video Production</h3>
                                <p>High-quality, original photographs are critical to inspiring patient confidence and elevating your brand. Let our expert photo team capture what makes your practice special.</p>
                                <span className={styles.line}></span>
                                <p className={styles.videokeypoints}>
                                - Professional Video and Photo editing
                                <br/> 
                                - Our team will come to you!
                                <br/>
                                - We will create a video introduction for your company
                                </p>
                            </div>
                        </div>


                        



                        <div className={styles.stepBox}>
                            <div className={styles.stepBoxIcon}>
                                <span className="icon-plan"><img src={video} alt="services" /></span>

                            </div>
                            <div className={styles.stepBoxContent}>
                                <h3>App Development </h3>
                                <p>Our app strategy framework knows to puts the user first, to uncover that distinctive idea that will delight users and set you apart while meeting all of your business and market objectives.</p>
                                <span className={styles.line}></span>
                                <p className={styles.keypoints}>
                                - App Strategy
                                    <br/>
                                - App Design
                                    <br/>
                                - App Development
                                    <br/>
                                - App Marketing
                                </p>
                            </div>
                        </div>

                        <div className={styles.stepBox}>
                            <div className={styles.stepBoxIcon}>
                                <span className="icon-plan"><img src={copywriting} alt="services" /></span>
                            </div>
                            <div className={styles.stepBoxContent}>
                                <h3>Copywriting</h3>
                                <p>When it comes to online medical marketing, there is nothing more potent than the written word. Let our expert content team create compelling, original copy for your campaigns.</p>
                                <span className={styles.line}></span>
                                <p className={styles.keypoints}>
                                - Focusing on compelling titles to catch the clients attention
                                    <br/>
                                - Clear and direct writing  
                                    <br/>
                                - Being precise and versatile is our top priority 
                                </p>
                            </div>
                        </div>

                        <div className={styles.stepBox}>
                            <div className={styles.stepBoxIcon}>
                                <span className="icon-plan"><img src={sms} alt="services" /></span>
                            </div>
                            <div className={styles.stepBoxContent}>
                                <h3>Social Media Management</h3>
                                <p>If you aren’t interacting with potential patients through social media, someone else is. We’ll develop a social media strategy that makes sense for your practice.</p>
                                <span className={styles.line}></span>
                                <p className={styles.keypoints}>
                                - Create a Instagram &amp; Facebook following to reach new clients
                                    <br/>
                                - Instagram and Facebook ad marketing 
                                    <br/>
                                - Create custom posts to attract the right audience 
                                </p>
                            </div>
                        </div>

                        <div className={styles.stepBox}>
                            <div className={styles.stepBoxIcon}>
                                <span className="icon-plan"><img src={stats} alt="services" /></span>
                            </div>
                            <div className={styles.stepBoxContent}>
                                <h3>Analytics Reporting</h3>
                                <p>Effective campaign management begins with intelligent analytics. We provide clear cut reporting, so you know where to tweak and where to double down.</p>
                                <span className={styles.line}></span>
                                <p className={styles.keypoints}>
                                - Effective campaign management
                                    <br/>
                                - Provide transparent reporting to our clients
                                    <br/>
                                - Data visualizations, such as graphs or charts are provided for all our clients 
                                    <br/>
                                - Conversion tracking 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.linktocontact}>
                        <h1 className={styles.titlebackground}>Find out what we can do
                           <br/> for your practice</h1>
                        
                           <div className={styles.contactButton}>
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
                </motion.div>
                </section>
        )
    }
}


export default Services