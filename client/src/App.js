import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Myhome from "./Myhome";
import Services from "./ServicesPage/Services";
import OurWork from "./OurWorkPage/OurWork";
import MyContact from "./ContactPage/ContactPage";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  return (
    <Router>

      {/* <Route render={({location}) =>(
        
    <TransitionGroup>
    <CSSTransition
    key={location.key}
      timeout={30000}
      className="fade"
    >
      <Switch>

        <Route exact path="/" component={Myhome} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/ourwork" component={OurWork} />
        <Route exact path="/contact" component={MyContact} />


      </Switch>
    </CSSTransition>
    </TransitionGroup>

      )}/>  */}

    <AnimatePresence>
        <Switch>

          <Route exact path="/" component={Myhome} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/ourwork" component={OurWork} />
          <Route exact path="/contact" component={MyContact} />


        </Switch>
      </AnimatePresence>
  
    </Router>
  );
}

export default App;

