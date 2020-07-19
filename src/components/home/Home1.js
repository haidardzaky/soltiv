import React from "react";
import {Container, Row, Col} from 'reactstrap';
import Rocket from '../../assets/aset_roket.png';
import RightArrow from '../../assets/right-arrow.png';
import {Link} from 'react-router-dom'

class Home1 extends React.Component {
  render(){
    return(
      <div className="home1-bg">
        <div className="container">
          <Container>
            <Row>
              <Col lg="7" md="7" sm="12" xs="12">
                <div>
                  <div className="home1-left">
                    <div>
                      Solution
                    </div>
                    <div>
                      Technology Interactive
                    </div>
                  </div>
                  <div style={{marginTop: 20, marginBottom: 40, fontSize: 20}}>
                    Towards 4.0 Industrial Revolution in Indonesia
                  </div>
                  <Link to="/portfolio" style={{textDecoration:'none'}}>
                    <div className="button-portfolio">
                      <div style={{fontSize: 22, lineHeigth:27}}><b>Our Portfolio</b></div>
                      <div style={{fontSize: 24, marginTop: -5}}>
                        <img src={RightArrow} width={15} alt="right-arrow"/>
                      </div>
                    </div>
                  </Link>
                </div>
              </Col>
              <Col lg="5" md="5" sm="12" xs="12">
                <div style={{width:'100%', textAlign:'center'}}>
                  <img src={Rocket} alt="roket" style={{maxWidth: 300, width: '100%'}}/>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export default Home1
