import React from 'react'
import Footer from '../components/general/Footer';
import Navbar from '../components/general/Navbar';
import About1 from '../components/about-us/About1'
import OurValues from '../components/about-us/OurValues'
import OurServices from '../components/about-us/OurServices'


class AboutUs extends React.Component {
  render(){
    return(
      <div style={{backgroundColor:'#2C0838', color:'white', width:'100%'}}>
          <Navbar />
          <About1 />
          <OurValues />
          <OurServices />
          <Footer />
      </div>
    )
  }
}

export default AboutUs
