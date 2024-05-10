import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      
      <div className='foot-social-media'>
        <a href="https://github.com/ninabuscemi" className="github social mobile-foot"><i><FontAwesomeIcon icon={faGithub} size="2x" /></i></a>
        <a href="https://www.linkedin.com/in/ninabuscemi/" className="linkedin social mobile-foot"><i><FontAwesomeIcon icon={faLinkedin} size="2x" /></i></a>
        <a href="https://www.instagram.com/nina_coding/" className="insta social mobile-foot"><i><FontAwesomeIcon className='insta-icon' icon={faInstagram} size="2x" /></i></a>
      </div>
    </footer>
  );
}

export default Footer;