
import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import Social from '../components/Social';


// importing images for home page
import profile from '../img/IMG_3552.jpg';

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <img src={profile} className="profilepic" alt="profile"></img>

        <ReactTypingEffect
          className="typingeffect"
          text={["Hi I'm Levi, Nice to meet you !"]}
          speed={90}
          eraseDelay={500}
        />

        <Social/>

      </div>
    );
  }
}
export default Home;
