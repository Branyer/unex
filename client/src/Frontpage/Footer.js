
import React from "react"; 
import "../../src/main.css";

import huron from "../../src/images/huron.jpg"
import logo from "../../src/images/Unex80x20.png"
import pfizer from "../../src/images/pfizer.jpg"
import qhr from "../../src/images/qhr.jpg"
import aurora from "../../src/images/Aurora.jpg"



function Footer() {return(

<div class="footer-wrapper">

    <div className="footer-number">
        <p>619-765-8277</p>
    </div>

    <div className="footer-logo">

    <img id="logo-footer" width="150px" height="60px" src={logo}  alt="company logo"/>
    <p className="copyrights-info">© 2020 Unex Marketing™ All Rights Reserved Privacy Policy</p>
    </div>

    <div className="company-email">
        <p> info@unexmarketing.com </p>
    </div>


</div>
)}

export default Footer