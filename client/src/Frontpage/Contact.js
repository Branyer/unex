import React, {Component} from "react";
import "../../src/main.css";
import axios from "axios";


class Contact extends Component {
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
        <div class="contact-wrapper">

            <h3 id="title-form">How can we help ?</h3>
            <form class="form" onSubmit={this.fromSubmit}>

                <div className="options-container">
                    <div class="name">
                        <input id="name" 
                        type="text" 
                        name="name" 
                        placeholder='Name'
                        value={this.state.name}
                        onChange={this.handleName}>
                        </input>
                    </div>
                  
                    <div class="email">
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
                
                <div className="msg-sent" className={this.state.sent ? 'msg-sent msgAppear':'msg-sent'}> Thank you we'll get back to shortly! </div>
                
                <div class="description">
                    <textarea 
                    name="content" 
                    id="contact" 
                    cols="80"
                     rows="10" 
                     placeholder="Describe what we can help you with."
                     value={this.state.description}
                    onChange={this.handleDescription}
                     ></textarea>
                    <button id="submit-form" type="submit">SUBMIT</button>

                </div>
            </form>

        </div>

    )
}
}


export default Contact 