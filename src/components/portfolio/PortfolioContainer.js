import React, {Component} from 'react'
import {Container, Row, Col} from 'reactstrap';
import PortfolioCard from './PortfolioCard';

export default class PortfolioContainer extends Component {
  render(){
    return(
      <div className="container" style={{paddingTop: 100, backgroundColor:'#2C0838'}}>
        <Container>
          <Row>
            <Col lg="4" md="4" sm="6" xs="12">
              <PortfolioCard />
            </Col>
            <Col lg="4" md="4" sm="6" xs="12">
              <PortfolioCard />
            </Col>
            <Col lg="4" md="4" sm="6" xs="12">
              <PortfolioCard />
            </Col>
            <Col lg="4" md="4" sm="6" xs="12">
              <PortfolioCard />
            </Col>
            <Col lg="4" md="4" sm="6" xs="12">
              <PortfolioCard />
            </Col>
            <Col lg="4" md="4" sm="6" xs="12">
              <PortfolioCard />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
