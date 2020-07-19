import React, {Component} from 'react'
import {Container, Row, Col} from 'reactstrap';
import Phone from '../../assets/about-us/phone.png'
import Web from '../../assets/about-us/web.png'
import Iot from '../../assets/about-us/iot.png'

class OurServices extends Component{
  render(){
    return(
      <div className="container" style={{ marginBottom: 50}}>
        <div className="about-title" style={{width:'100%', textAlign:'center', marginBottom: 50}}>Our Services</div>
        <Container>
          <Row>
            <Col lg="4" md="4" sm="12" xs="12">
              <div style={{padding: 10, width:'100%', textAlign:'center'}}>
                <img src={Phone} alt="logo soltiv" className="logo-soltiv-big" style={{width: '40.55px', height: '68.21px'}}/>
                <p className="about-title" style={{color:'white', marginTop: 20, marginBottom: 10}}>MOBILE APPS</p>
                <p>We build and develop mobile application to improve the quality and asset to your business.</p>
              </div>
            </Col>
            <Col lg="4" md="4" sm="12" xs="12">
              <div style={{padding: 10, width:'100%', textAlign:'center'}}>
                <img src={Web} alt="logo soltiv" className="logo-soltiv-big" style={{width: '40.55px', height: '68.21px'}}/>
                <p className="about-title" style={{color:'white', marginTop: 20, marginBottom: 10}}>WEBSITE APPS</p>
                <p>We build and develope we applications to fulfill the needs and desives of your company</p>
              </div>
            </Col>
            <Col lg="4" md="4" sm="12" xs="12">
              <div style={{padding: 10, width:'100%', textAlign:'center'}}>
                <img src={Iot} alt="logo soltiv" className="logo-soltiv-big" style={{width: '40.55px', height: '68.21px'}}/>
                <p className="about-title" style={{color:'white', marginTop: 20, marginBottom: 10}}>IoT</p>
                <p>We build and develop IoT to facilitate work within your company</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default OurServices
