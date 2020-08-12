import React from "react"; 
import "../../src/main.css";

import huron from "../../src/images/huron.jpg"
import nano from "../../src/images/nano.jpg"
import pfizer from "../../src/images/pfizer.jpg"
import qhr from "../../src/images/qhr.jpg"
import aurora from "../../src/images/Aurora.jpg"

function Frontpage (){

        return(
            <section id="container-past-customers">
                
                <img className="img" id="img1" src={huron} alt="partnerimg"/>
                <img className="img" src={nano} alt="partnerimg"/>
                <img className="img" src={pfizer} alt="partnerimg"/>
                <img className="img" src={qhr} alt="partnerimg"/>
                <img className="img" id="img5" src={aurora} alt="partnerimg"/>


            </section> 
            
        )
    }


export default Frontpage