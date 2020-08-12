import React from "react";
import "../../src/main.css";
import styled from "styled-components"

import strategy from "../../src/images/trategy.png"
import design from "../../src/images/design.png"
import seo from "../../src/images/digital.png"
import marketing from "../../src/images/marketing.png"
// import aurora from "../../images/Aurora.jpg"

function Brandsolutions() {

    return (
        // strategic storytelling web developement & design SEO Digtital marketing

        <div class="wrapper">
            <h1 className="services">Our Brand Solutions <span id="line"></span></h1>
            <div class="cols">
                <div class="col" ontouchstart="this.classList.toggle('hover');">
                    <div class="container">
                        <div id="card1" className="front" /*style="background-image: url(https://unsplash.it/500/500/)"*/>
                            <span className="strategy-img"><img src={strategy} alt="services" /></span>
                            <div class="inner">
                                <p>Stratagy &amp; story </p>
                                <span>>>>></span>
                            </div>
                        </div>
                        <div class="back">
                            <div class="inner">
                                <h1> Stratagy &amp; story</h1>
                                <p>Every strong brand has both.
                                   We’ll build yours on a foundation of audience insight, market intelligence, and customer value. <br />
                                    <ul>
                                        -  &nbsp; Competitive analysis <br />
                                - &nbsp; Brand positioning <br />
                                - &nbsp; Messaging platform br <br />
                                - &nbsp; Channel strategy
                                </ul>
                                </p>


                            </div>
                        </div>
                    </div>
                </div>
                <div class="col" ontouchstart="this.classList.toggle('hover');">
                    <div class="container">
                        <div id="card2" class="front"/*style="url(https://unsplash.it/511/511/)"*/>
                            <span className="strategy-img"><img src={design} alt="services" /></span>
                            <div class="inner">
                                <p>Web Developement &amp; Design</p>
                                <span>>>>></span>
                            </div>
                        </div>
                        <div class="back">
                            <div class="inner">
                            <h1>Web Developement &amp; Design</h1>

                                <p>
                                We’ll activate your brand and share your story through smart, strategic messaging and digital media precisely crafted for your target audiences. <br/>
                                
                                <ul>
                                - &nbsp; Corporate &amp; products <br/>
                                - &nbsp; Brand visual systems <br/>
                                - &nbsp; Websites &amp; social profiles <br/>
                                - &nbsp; Video  &amp; animation <br/>
                                </ul>
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col" ontouchstart="this.classList.toggle('hover');">
                    <div class="container">
                        <div id="card3" class="front" /*style="background-image: url(https://unsplash.it/502/502/)"*/>
                            <span className="strategy-img"><img src={seo} alt="services" /></span>
                            <div class="inner">
                                <p>Content Strategy &amp; Copywrititng</p>
                                <span>>>>></span>
                            </div>
                        </div>
                        <div class="back">
                            <div class="inner">
                            <h1>Content Strategy &amp; Copywrititng</h1>

                                <p>At Unex, every medical website we build starts with well-researched, well-crafted copy designed to educate and enlighten prospective patients about you and your practice.
                                <ul>
                                - &nbsp; Meeting between you and our creative team <br/>
                                - &nbsp; Targeting the right audience <br/>
                                </ul>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col" ontouchstart="this.classList.toggle('hover');">
                    <div class="container">
                        <div id="card4" class="front" /*style="background-image: url(https://unsplash.it/503/503/)"*/>
                            <span className="strategy-img"><img src={marketing} alt="services" /></span>
                            <div class="inner">
                                <p>Digital Marketing</p>
                                <span>>>>></span>
                            </div>
                        </div>
                        <div class="back">
                            <div class="inner">
              <h1>Digital Marketing</h1>

                                <p>We use a full spectrum of digital, social, and promotional solutions to build your audience, get you noticed, or get you funded.

                                <ul>
                                - &nbsp;  Paid digital (SEM/PPC) <br/>
                                - &nbsp; Content marketing <br/>
                                - &nbsp; Search strategy &amp; SEO<br/>
                                - &nbsp; Brand collateral <br/>
                                </ul>
                                </p> 
                                </div>                           
                        </div>
                    </div>
                </div>

            </div>
            <div className="full-services-button">
                <a href="/services">
                    SEE OUR FULL SERVICES &ensp; >
                </a>
            </div>
        </div>

    )
}


export default Brandsolutions 