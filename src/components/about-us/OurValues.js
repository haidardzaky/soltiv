import React, {Component} from 'react'
import {Container, Row, Col} from 'reactstrap';
import Priority from '../../assets/about-us/priority.png'
import Guarantee from '../../assets/about-us/guarantee.png'
import HighTech from '../../assets/about-us/hightech.png'
import Satisfaction from '../../assets/about-us/satisfaction.png'

class OurValues extends Component{
  render(){
    return(
      <div className="container" style={{ marginBottom: 50}}>
        <div className="about-title" style={{width:'100%', textAlign:'center', marginBottom: 50}}>Our Values</div>
        <Container>
          <Row>
            <Col lg="3" md="6" sm="12" xs="12">
              <div style={{padding: 10, width:'100%', textAlign:'center'}}>
                <img src={Priority} alt="logo soltiv" className="logo-soltiv-big" style={{width: '40.55px'}}/>
                <p className="about-title" style={{color:'white', marginTop: 20, marginBottom: 10}}>PRIORITY</p>
                <p>We always provide the best service because your trust is our top priority</p>
              </div>
            </Col>
            <Col lg="3" md="6" sm="12" xs="12">
              <div style={{padding: 10, width:'100%', textAlign:'center'}}>
                <img src={Guarantee} alt="logo soltiv" className="logo-soltiv-big" style={{width: '40.55px'}}/>
                <p className="about-title" style={{color:'white', marginTop: 20, marginBottom: 10}}>GUARANTEE</p>
                <p>In the service we provide, we have a guaranteed time in building or developing products.</p>
              </div>
            </Col>
            <Col lg="3" md="6" sm="12" xs="12">
              <div style={{padding: 10, width:'100%', textAlign:'center'}}>
                <img src={HighTech} alt="logo soltiv" className="logo-soltiv-big" style={{width: '55px'}}/>
                <p className="about-title" style={{color:'white', marginTop: 25, marginBottom: 10}}>HIGH TECH</p>
                <p>We always use high technology in building and developing products</p>
              </div>
            </Col>
            <Col lg="3" md="6" sm="12" xs="12">
              <div style={{padding: 10, width:'100%', textAlign:'center'}}>
                <img src={Satisfaction} alt="logo soltiv" className="logo-soltiv-big" style={{width: '90px'}}/>
                <p className="about-title" style={{color:'white', marginTop: -10, marginBottom: 10}}>SATISFACTION</p>
                <p>We want you to always be satisfied with the services we provide</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default OurValues
