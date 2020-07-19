import React from 'react'
import {Container, Row, Col} from 'reactstrap';
import Sticky from 'react-sticky-el';
import { Link, NavLink } from "react-router-dom";
import NavLogo from '../../assets/soltiv_logo.png'



export default class Navbar extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isTop: true,
      extOpen: false,
      extUserOpen: false,
      isShow: false
    };
    this.handleMenu = this.handleMenu.bind(this);
  }

  handleToggle = () => {
    this.setState({ extOpen: !this.state.extOpen });
  };
  handleUserToggle = () => {
    this.setState({ extUserOpen: !this.state.extOpen });
  };

  handleClose = event => {
    if (event && this.anchorEl.contains(event.target))
    return;
    this.setState({ extOpen: false });
  };
  handleUserClose = event => {
    if (event && this.anchorUserEl.contains(event.target))
    return;
    this.setState({ extUserOpen: false });
  };

  handleScroll = () => {
    // const isTop = window.scrollY <= 600;
    const isTop = (this.state.isTop && window.scrollY <= 20) || (!this.state.isTop && window.scrollY <= 20) ;
    if (isTop !== this.state.isTop) {
      this.handleClose();
      this.handleUserClose();
      this.setState({ isTop });
    }
  }

  handleMenu(){
    this.setState(function(prevState){
      return {isShow: !prevState.isShow}
    });
  }

  componentDidMount(){
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }


  render(){

    const {isShow, isTop} = this.state;
    const navbar = isTop? (this.props.page === 'home'? "navbar navbar-fixed": "navbar navbar-fixed") : "navbar navbar-fixed scale-in-ver-top";
    //const LogoChange = isTop ? (this.props.page === 'home'? Logo_home: Logo) : Logo_home;
    const subNavbar = "sub-navbar container";
    const btnNavbar = "button-navbar";
    //const btnLogin = isTop? (this.props.page === 'home'? "button-login button-login-home": "button-login button-login-other"):"button-login button-login-plain";
    //const btnRegister = isTop? (this.props.page === 'home' ? "button-register button-register-home": "button-register button-register-other"):"button-register button-register-plain";
    const btnMenu = "button-menu";
    const menuLogo = isShow?<i class="fa fa-close" aria-hidden="true"/>:<i class="fa fa-bars" aria-hidden="true"/>;
    const bottom_nav = isShow?"content-nav visible-nav": "content-nav invisible";


    const tmp =
    <div
      className={navbar}
      style={{
        backgroundColor: isTop?"transparent":"#2C0838",
        boxShadow:isTop?"none":"0 -6px 40px 4px #111"
      }}
    >
      <div className={subNavbar}>
        <div style={{display:'flex', flexDirecttion:"row", width: '100%', justifyContent:'space-between'}}>
            <div className="right-logo">
              <Link to="/" style={{textDecoration: 'none'}}>
                <img src={NavLogo} alt="roket" style={{width:130, height: 41}}/>
              </Link>
            </div>
            <div className="sm-none xs-none">
              <NavLink className="navBarLink" activeClassName="active" to="/about-us"><button className={btnNavbar}><b>ABOUT</b></button></NavLink>
              <NavLink className="navBarLink" activeClassName="active" to="/portfolio"><button className={btnNavbar}><b>OUR PORTFOLIO</b></button></NavLink>
              <a href="https://medium.com/soltiv-indonesia" rel="noopener noreferrer" target="_blank"><button className={btnNavbar}><b>OUR MEDIUM</b></button></a>
              <a href="https://wa.me/6281395150323" rel="noopener noreferrer" target="_blank"><button className="contact-button"><b>CONTACT</b></button></a>
            </div>
            <div className="lg-none md-none">
              <div className="menu-position">
                <button className={btnMenu} onClick={this.handleMenu}>
                  {menuLogo}
                </button>
              </div>
            </div>
        </div>
      </div>
    </div>



    return(
      <div style={{zIndex: 90, position:'relative'}}>
        <Sticky>
          {tmp}
          <div className="md-none lg-none">
            <div className={bottom_nav} style={{marginTop: 91, width: '100%', textAlign:'center', boxShadow:"0px 5px 5px 0px #111"}}>
              <div>
                <Container>
                  <Row>
                    <Col lg="12" md="12" sm="12" xs="12">
                      <NavLink className="" to="/about-us">
                        <button className="button-navbar-bottom">
                          About
                        </button>
                      </NavLink>
                    </Col>
                    <Col lg="12" md="12" sm="12" xs="12">
                      <NavLink className="" to="/portfolio">
                        <button className="button-navbar-bottom">
                          Portfolio
                        </button>
                      </NavLink>
                    </Col>
                    <Col  lg="12" md="12" sm="12" xs="12">
                      <a href="https://medium.com/soltiv-indonesia" rel="noopener noreferrer" target="_blank"><button className={btnNavbar}>Medium</button></a>
                    </Col>
                    <Col  lg="12" md="12" sm="12" xs="12">
                      <a href="https://wa.me/6281395150323" rel="noopener noreferrer" target="_blank"><button className="contact-button" style={{marginLeft: 0, marginBottom: 10}}>Contact</button></a>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </div>
        </Sticky>

      </div>
    )
  }
}
