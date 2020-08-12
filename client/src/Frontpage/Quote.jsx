import React, { useState } from "react"; 
import "../../src/main.css";
import {css, cx} from "emotion";

 
const Quote = () => {

    const quotes = {
        0: {
            client: " - DR. ERiC RONALD, Optometrist",
            quote: <q>Unex knows aesthetic medical marketing like no one else I’ve seen. They are one part tech start up, one part design specialists and all parts marketing geniuses.</q>
        },
        1: {
            client: " - SAI. KHAM, DMD",
            quote: <q>Working with Unex has allowed us the ability to place our content in front of extremely targeted audiences, ofter enabling us to broaden our reach through further conversation and organic engagment. They dive into the data and provide useful recommendations and analysis that provide insight as we shape our strategy. </q>
        },  
        2: {
            client: " - DR. Marissa Glendell, Plastic Surgeon",
            quote:  <q>Unex is an essential marketing partner of ours. Their team and their advanced technology platform uniquely utilized our ad dollars to maximize our engagement and efficiency. In addition, Unex used raw data to construct a complete strategy for an authentic client journey.</q>
        },  
        3: {
            client: " - DR. James Lopez, Dentist",
            quote: <q>Amazing service, beautiful design, and incredible marketing; I see more new patients than I could imagine as a result of their creativity and market savvy. These guys are my secret weapon.</q>
        },
    }


    // we ll be useing a react hook called useState() to set the quote to the first one 
    // before using useState youll need an array w 2 values
    const [current, setCurrent] = useState(quotes [0]);
    //another state value we ll track what color the buttons should be
    const [active, setActive] = useState(0)

    //passing an event 
    const handleSetClick = (event) => {
        setCurrent(quotes[event.target.getAttribute("data-quote")])
        setActive(event.target.getAttribute("data-quote"))
        console.log(current)
    }

    
        return(
        <div className={css`
        display: flex;
        flex-direction: column;
        align-self: center;
        margin: 40px auto;
        max-width: 700px;
        position: relative;
        bottom:1000px;

       h1{
        text-align: center;
        font-family: popins;
        font-weight: bold;
       } 

        p{
            text-align: center;
            margin-bottom: 20px;
            color: #45454d;
            line-height: 2em;
        }
      
        
        `}>
            <h1> Testimonials </h1>
            <p> 
                {current.quote}
                {current.client}
            </p>

            
        <div className={css`
          display: flex;
          position: relative;
          left:201px;
        
          span{
            height: 20px;
            width: 20px;
            margin: 0 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }

          span::before{
            content: "";
            height: 6px;
            width: 6px;
            background-color: #d4d4d4;
            border-radius: 50%;
            transition: background-color 0.3 ease ;
          }

          span:hover::before{
            background-color: #45454d;
          }

          span[data-quote="${active}"]::before {
            background-color: #45454d;

          }

        
        `}>
            {/* a method that returns an array og a given obj  */}
            {Object.keys(quotes).map(index => (
                <span onClick={event => handleSetClick(event)}
                data-quote={index}
                key ={index}
                />

            ) )}
        </div>
        </div>

    )
}


export default Quote