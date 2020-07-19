import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import TopAbout from '../../assets/about-us/aboutus.svg'


export default class About1 extends Component {
  render(){
    return(
      <div className="container" style={{paddingTop: 60, paddingBottom: 100, position:'relative'}}>
        <div className="">
          <Container>
            <Row>
              <Col lg="6" md="6" sm="12" xs="12">
                 <div>
                   <img src={TopAbout} alt="logo soltiv" className="logo-soltiv-big" style={{width: '85%'}}/>
                 </div>
              </Col>
              <Col lg="6" md="6" sm="12" xs="12">
                 <div style={{marginTop: '8%'}}>
                   <p className="about-title">About Soltiv</p>
                   <p align="justify">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices mauris, ac egestas leo, in. Consectetur eget et, pellentesque mi urna, sit. Netus ornare tristique pretium non hendrerit adipiscing ut id. Volutpat ornare consectetur tellus nisl vitae pellentesque euismod. Sed enim ut viverra cras platea. Tempor, ac eget scelerisque erat parturient ac. Pellentesque tortor sit vel diam mollis diam nisl. In pretium potenti ipsum diam nunc. Pretium nunc rutrum mus lectus morbi nisl, tristique. Pharetra vitae potenti massa praesent venenatis. Sit eget malesuada tellus blandit tristique at et lobortis. Tristique fusce eget diam.
                   </p>

                   <div style={{width:'100%', textAlign:'center'}}>
                    <p>
                      Our Motto
                    </p>
                    <p style={{fontSize: 24, fontWeight: 'bold'}}>
                      <i>BUILD GROW AND <span style={{color: "#60D1CB"}}>INNOVATIVE</span></i>
                    </p>
                  </div>
                 </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}
