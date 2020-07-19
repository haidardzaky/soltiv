import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import LogoS from '../../assets/logo_s.svg'


export default class Home2 extends Component {
  render(){
    return(
      <div className="container" style={{minHeight: 650, position:'relative'}}>
        <div className="vertical-center">
          <Container>
            <Row>
              <Col lg="6" md="6" sm="12" xs="12">
                 <div style={{paddingTop: 10, paddingBottom: 5}}>
                   <img src={LogoS} alt="logo soltiv" className="logo-soltiv-big"/>
                 </div>
              </Col>
              <Col lg="6" md="6" sm="12" xs="12">
                 <div style={{marginTop: '12%'}}>
                   <p style={{fontSize: 28, letterSpacing: '0.05em', fontWeight: 600}}>HELLO, WE ARE</p>
                   <p style={{paddingVertical: 20, fontWeight: 900, fontSize: 48, color:'#60D1CB', letterSpacing: '0.05em'}}>
                     SOLTIV
                   </p>
                   <p align="justify">
                     We help Indonesia towards Industrial Revolution 4.0. SOLTIV is a web, mobile applications and iOT Developer based in Bandung, Indonesia. For us your trust is our top priority. We have a ... of time. We always use newest and stable technology to help growing up your business.
                   </p>
                 </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}
