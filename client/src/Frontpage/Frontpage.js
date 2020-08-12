import React from "react"; 
import "../../src/main.css";
import chiro from "../../src/images/Chiropractic.PNG"
import dentist from "../../src/images/mobile-dentist.PNG"
import plastic from "../../src/images/mobile-implants.PNG"
import plasticsurg from "../../src/images/mobile-plasticsurg.PNG"
import chiropractic from "../../src/images/mobile-chiropractic.PNG"

function Frontpage (){

        return(
            <section id="main-frontpage">
                <div className="main-text">
                    <h1 id="main-sum"> Healthcare marketing <br/>
                    that increases 
                        <span className="title1" >Brand Awareness</span> 
                        <span className="title2" >Sales</span> 
                        {/* <span className="title3" >  Sales</span> 
                        <span className="title4" > Stimulates </span>  */}

                    </h1>
                    <p>
                        Unex is an independent global leader in data-driven marketing. <br/> We specialize in digital marketing for healthcare practices.
                         Our <br/> team specializes in delivering creative strategies and digital <br/> marketing that produce results and effciencies for your business.
                    </p>
                </div>
                <div className="showcase_mobile">
                    <ul className="rotating">
                    <li className="image"><img src={dentist} alt="mobile design" width="200" top="20px" height="400"/></li>
                        <li className="image"><img src={chiro} alt="mobile design" width="200" height="400" bottom="10px"/></li>
                        <li className="image"><img src={plastic} alt="mobile design" width="200" height="400"/></li>
                        <li className="image"><img src={plasticsurg} alt="mobile design" width="200" height="400"/></li>
                        <li className="image"><img src={chiropractic} alt="mobile design" width="200" height="400"/></li>
                    </ul>
                </div>

                {/* <div className="past-customers"> 
                        <div><p>gang</p></div>                    
                        </div> */}

            </section> 
            
        )
    }


export default Frontpage