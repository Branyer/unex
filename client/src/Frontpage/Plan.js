import React from "react";
import "../../src/main.css";

import lightbulb from "../../src/images/idea.png"
import plan from "../../src/images/calendar.png"
import hammer from "../../src/images/hammer.png"
import flash from "../../src/images/flash.png"
// import aurora from "../../src/images/Aurora.jpg"

function Plan() {

    return (
        <section id="plan-container">
            <div className="text-title">
                <h1>We’re with you every step of the way.</h1>
            </div>

            <div className="plan-summary">
                <p>
                    <strong> Competition is everywhere. Why not stand out with a modern website. </strong>
                    Over 50% of patients look online before choosing the right doctor, and having the right website sets the tone for what follows. Announce your expertise with compelling visuals that say it all in a single instance. We bring your story to life and build a unique strategy around it.</p>               
            </div>
                   
            <div className="steps-container">
            <div className="step-box">
                <div className="icon">
                <span className="icon-plan"><img src={lightbulb} alt="services" /></span>

                </div>
                <div className="content">
                    <h3>Learn </h3> 
                    <p>We start by understanding who you are, what makes your practice unique, your goals, and your needs. Market research and data gathering help us identify key opportunities in your market.</p>
                </div>
            </div>

            <div className="step-box">
                <div className="icon">
                <span className="icon-plan"><img src={plan} alt="services" /></span>
                </div>
                <div className="content">
                    <h3>Plan</h3>
                    <p>Effective marketing starts with careful planning. It all has to line up just right. This is where we align our learnings about your practice with the opportunities we’ve identified and create a roadmap for success.</p>
                </div>
            </div>

            <div className="step-box">
                <div className="icon">
                <span className="icon-plan"><img src={hammer} alt="services" /></span>
                </div>
                <div className="content">
                    <h3>Build</h3>
                    <p>We build out a website that is engineered around your personality and designed to resonate with the kind of patients you want to reach. This is the core of your digital presence, and it has to be perfect.</p>
                </div>
            </div>

            <div className="step-box">
                <div className="icon">
                <span className="icon-plan"><img src={flash} alt="services" /></span>
                </div>
                <div className="content">
                    <h3>Execute</h3>
                    <p>Now it’s time to put your site to work and execute on your marketing plan. Through proven search engine optimization strategies and precisely-targeted digital advertising, your online growth begins..</p>
                </div>
            </div>
            </div>




        </section>

    )
}


export default Plan