import React from "react";
import Contact from "./ContactPage";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div>
        <NavLink to="/contact" activeClassName="active">Contact Us</NavLink>
      </div>
      <Contact />
      <h1>ABOUT</h1>
      <p>
        Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of
        sorrows, hates no prosecutors will unfold in the enduring of which were
        born in it? Often leads smallest mistake some pain main responsibilities
        are to stand for the right builder of pleasure, accepted explain up to
        now.The things we are accusing of these in the explication of the
        truth receives from the flattery of her will never be the trouble and
        they are refused to the pleasures
      </p>
    </div>
  );
};

export default About;
