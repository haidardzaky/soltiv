import React, {Component} from 'react'
import {Container, Row, Col} from 'reactstrap';
import SocialMedia from './SocialMedia'

class Footer extends Component {
  render(){
    return(
      <div
        style={{
          backgroundColor:"#2C0838",
          paddingBottom: 35,
          paddingTop: 50,
        }}
      >
        <Container>
          <Row>
            <Col lg="6" md="6" sm="5" xs="12">
              <SocialMedia />
            </Col>
            <Col lg="1" md="1" sm="1" xs="1">
              <div style={{width: '100%', textAlign:'right'}}>
                <i className='fa fa-map-marker' style={{fontSize:'24px', color:'white', margin: '0 auto'}} />
              </div>
            </Col>
            <Col lg="5" md="5" sm="6" xs="10">
              Puri Dago Mas Complex, No.3 Cobodas Raya Street, Bandung Antapani, West Java 40291
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Footer
