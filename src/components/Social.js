import React, { Component } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';


class Social extends Component {
  render() {
    return (
      <div class="social">
        <a href="https://github.com/LeviG68" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithubSquare}  color="#171515" size="3x" className='github'/>
        </a>

        <a href="https://twitter.com/DevopPeachfuzz" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} color="#00acee" size="3x" className='twitter' />
        </a>

        <a href="https://www.linkedin.com/in/levi-glendenning/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedinIn} color="#0e76a8" size="3x" className='linkedin'/>
        </a>
      </div>
    );
  }
}
export default Social;
