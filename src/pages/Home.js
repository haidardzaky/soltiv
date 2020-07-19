import React from 'react';
import Home1 from '../components/home/Home1'
import Home2 from '../components/home/Home2'
import Home3 from '../components/home/Home3'
import Footer from '../components/general/Footer';
import Navbar from '../components/general/Navbar';


class Home extends React.Component {
  render(){
    return(
      <div style={{backgroundColor:'#2C0838', color:'white', width:'100%'}}>
          <Navbar pages="home"/>
          <Home1 />
          <Home2 />
          <Home3 />
          <Footer />
      </div>
    )
  }
}

export default Home
