import React from 'react';
import Detail from '../components/portfolio/Detail'
import Footer from '../components/general/Footer';
import Navbar from '../components/general/Navbar';


class PortfolioDetail extends React.Component {
  render(){
    return(
      <div style={{backgroundColor:'#2C0838', color:'white', top: 0, bottom: 0, width:'100%'}}>
        <Navbar />
          <div style={{paddingTop: 70}}>
            <Detail />
          </div>
        <Footer/>
      </div>
    )
  }
}

export default PortfolioDetail
