import React, {Component} from "react";
import styles from "./contactStyles.module.css"
import axios from "axios";
import styled from "styled-components"
import AnimatedNavbar from "../components/AnimatedNavbar"
import { AnimatePresence, motion } from "framer-motion";
import logo from "../../src/images/Unex80x20.png"



const AppContainer = styled.div`
  display: flex;
  flex-direction: column; 
  min-height: 100vh;

  > div:first-of-type {
    flex: 1 0 70vh;
  }
`

class MyContact extends Component {

    state = { duration: 300 }

    onChange = data => {
      this.setState(data)
    }

state={
    name:"",
    email:"",
    website:"",
    phone:"",
    description:"",
    sent:false

}


// handle info
handleName=(e)=>{
    this.setState({
        name:e.target.value
    })
}

handleEmail=(e)=>{
    this.setState({
        email:e.target.value
    })
}

handleWebsite=(e)=>{
    this.setState({
        website:e.target.value
    })
}

handlePhone=(e)=>{
    this.setState({
        phone:e.target.value
    })
}

handleDescription=(e)=>{
    this.setState({
        description:e.target.value
    })
}

// end of handle inputs

fromSubmit=(e)=>{
    e.preventDefault();

    let data = {
        name:this.state.name,
        email: this.state.email,
        website: this.state.website,
        phone: this.state.phone,
        description: this.state.description
    } 

    axios.post('http://localhost:3001/api/forms', data)
    .then(res => {
        this.setState({
            sent:true,
        }, this.resetForm())
    })
    .catch(()=>{
        console.log("mssg not sent")
    })

}

// for reseting initial data
resetForm=()=>{
    this.setState({
        name:'',
        email:'',
        website:'',
        phone:'',
        description:''
    })

    setTimeout(()=>{
        this.setState({
            sent:false,
        })
    }, 3000)
}



    render(){
    return (
        <AppContainer>
        <AnimatedNavbar duration={this.state.duration} />

        <motion.div 
            initial={{ opacity:0,}}
            animate={{ opacity: 1 }}
            exit={{opacity: 0 }}>
        <div class={styles.contactWrapper}>


        {/* <div className={styles.ourworkcontact}>
                        <h1 className={styles.contactbackground}>Like what you see?
                           <br/> Find out how we can help</h1>
                        
                           <div className={styles.ourworkcontactButton}>
                            <a href="/contact">
                               CLICK HERE &ensp; >
                            </a>
                            </div> 
                       </div> */}


            <h3 className={styles.titleForm}>How can we help ?</h3>
            <div id={styles.titleSummary}>
                 <p id={styles.titleParagraph}>
                 Ready to turn your business into a strong brand and powerful story?
                 Contact our agency to learn more or start a project with us.
                 <br/>
                  619-765-8277</p>
             </div>

             <div className={styles.mapContainer}>
             <iframe className={styles.mapContact} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13419.126620067917!2d-117.1570961!3d32.7715277!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x757aa0cffd375673!2sUnex%20Marketing!5e0!3m2!1sen!2sus!4v1597131023587!5m2!1sen!2sus" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>

             <div className={styles.ourworkcontact}>
            
           

            <form className={styles.form} onSubmit={this.fromSubmit}>

                <div className={styles.optionsContainer}>
                    <div class="name">
                        <input id="name" 
                        type="text" 
                        name="name" 
                        placeholder='Name'
                        value={this.state.name}
                        onChange={this.handleName}>
                        </input>
                    </div>
                  
                    <div className={styles.email}>
                        <input id="email"  
                        type="text" 
                        name="fname"
                         placeholder="Email"
                         value={this.state.email}
                        onChange={this.handleEmail}
                        required
                         >
                        </input>
                        
                    </div>


                    <div class="current-webiste">
                        <input id="current-website" 
                        type="text" 
                        name="name" 
                        placeholder='Current Website'
                        value={this.state.website}
                        onChange={this.handleWebsite}
                        >
                        </input>
                    </div>
                  
                    <div class="phone">
                        <input id="phone"  
                        type="text" 
                        name="fname" 
                        placeholder="Phone"
                        value={this.state.phone}
                        onChange={this.handlePhone}
                        >
                        </input>
                        
                    </div>
                    </div>
                
                <div className="msg-sent-page" className={this.state.sent ? 'msg-sent-page msgAppear-page':'msg-sent-page'}> Thank you we'll get back to shortly! </div>
                
                <div className={styles.description}>
                    <textarea 
                    name="content" 
                    id="contact" 
                    cols="80"
                     rows="10" 
                     placeholder="Describe what we can help you with."
                     value={this.state.description}
                    onChange={this.handleDescription}
                     ></textarea>
                    <button className={styles.buttonForm}  type="submit">SUBMIT</button>

                </div>
            </form>

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

        </div>
        </motion.div>
        </AppContainer>

    )
}
}


export default MyContact 