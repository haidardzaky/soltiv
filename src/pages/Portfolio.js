import React from 'react';
import PortfolioContainer from '../components/portfolio/PortfolioContainer'
import Footer from '../components/general/Footer';
import Navbar from '../components/general/Navbar';


class Portfolio extends React.Component {
  render(){
    return(
      <div style={{backgroundColor:'#2C0838', color:'white', top: 0, bottom: 0, width:'100%', position:'absolute'}}>
        <Navbar />
        <PortfolioContainer />
        <Footer/>
      </div>
    )
  }
}

export default Portfolio
