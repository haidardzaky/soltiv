import React from "react";
import {Container} from 'reactstrap';

const SocialMedia = () => (
  <div className="container social-media-position" style={{}}>
    <Container>
      <a href="https://www.facebook.com/provestyid/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', outline: 'none'}}>
        <button className="fa fa-facebook fa-socmed"><span></span></button>
      </a>
      <a href="https://www.instagram.com/provesty/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', outline: 'none'}}>
        <button className="fa fa-instagram fa-socmed"><span></span></button>
      </a>
      <a href="https://twitter.com/provestyid" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', outline: 'none'}}>
        <button className="fa fa-twitter fa-socmed"><span></span></button>
      </a>
      <a href="https://www.youtube.com/channel/UC8VkfjCxx_smMpChFlPh07A" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', outline: 'none'}}>
        <button className="fa fa-youtube fa-socmed" target="_blank" rel="noopener noreferrer"><span></span></button>
      </a>
    </Container>
  </div>)


  export default SocialMedia;
