import React, { Component } from "react";
import Social from "../components/Social";

class Contact extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">Contact Me</h1>
        <h3> <a href='mailto:levi.glendenning@gmail.com' >Levi.Glendenning@gmail.com</a></h3>
        
        <Social/>
      </div>
    );
  }
}
export default Contact;
