import React, {Component} from 'react';
import Slider from "react-slick";
import {Container, Row, Col} from 'reactstrap';
import Group from '../../assets/group.png';
import { BsChevronCompactLeft,BsChevronCompactRight } from "react-icons/bs";

class Home3 extends Component {

  constructor(props) {
    super(props);

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {

    var $lang = {};
    $lang['testimony_title_ridwan'] = 'Team Profesional';
    $lang['testimony_ridwan'] = 'Latar belakang profesional kedua founder serta mudahnya investasi melalui Crowdfunding membuat saya mantap untuk menjadi <i>early adapter</i> Provesty.';
    $lang['testimony_title_danardono'] = 'Update Berkala';
    $lang['testimony_danardono'] = 'Provesty mengakomodasi keinginan saya untuk berinvestasi di bidang properti dengan cara yang mudah, akad syariah, dan terjangkau, namun tetap sesuai dengan kaidah kepantasan, peraturan, dan profesionalitas tim Provesty.';
    $lang['testimony_title_Group'] = 'Investasi Terjangkau dan Akad Jelas';
    $lang['testimony_Group'] = 'Investasi di Provesty terjangkau, dilakukan proses kurasi proyek yang baik dan akad yang jelas. Memantau investasi juga sangat mudah karena diberikan dashboard yang intuitif dan notifikasi email.';
    $lang['testimony_title_lutfi'] = 'Sifat Properti Aman';
    $lang['testimony_lutfi'] = 'Tak diragukan bahwa properti masih jadi pilihan aman dalam berinvestasi. Melalui Provesty, investasi di properti bukan hanya aman, tapi mudah dan transparan';
    $lang['testimony_title_indah'] = 'Cocok untuk Milenial';
    $lang['testimony_indah'] = 'Provesty memudahkan millenial seperti saya untuk berinvestasi di bidang properti secara aman, transparan, dan berprinsip syariah.';

    var testimonies =[
      {
        "pic": Group,
        "name":"Jabatan",
        "age":"29",
        "job":"Karyawan Swasta",
        "title_lang":"testimony_title_ridwan",
        "content_lang":"testimony_ridwan"
      },
      {
        "pic": Group,
        "name":"Jack",
        "age":"41",
        "job":"Jabatan",
        "title_lang":"testimony_title_danardono",
        "content_lang":"testimony_danardono"
      },
      {
        "pic": Group,
        "name":"Group",
        "age":"24",
        "job":"Jabatan",
        "title_lang":"testimony_title_Group",
        "content_lang":"testimony_Group"
      },
      {
        "pic": Group,
        "name":"Haidar",
        "age":"24",
        "job":"Pegawai Swasta",
        "title_lang":"testimony_title_indah",
        "content_lang":"testimony_indah"
      },
    ];

    const settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      speed: 500,
      // slidesToShow: 5,
      centerPadding: '0px',
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
      dots: true,
      variableWidth: false
    };

    // const { classes } = this.props
    return (<div className="testimoni" style={{backgroundColor:'#2C0838', color:'white', width:'100%', height:'100% !important'}} >
      <div className="">
        <Container>
          <Row >
            <Col lg="1">
              <div className="sm-none xs-none">
                <div onClick={this.previous} style={{fontSize: 48, marginTop: 100}}>
                  <BsChevronCompactLeft />
                </div>
              </div>
            </Col>
            <Col lg="10" md="12" sm="12" xs="12">
              <Slider ref={c => (this.slider = c)} {...settings}>
                {
                  testimonies.map((t, index) =>
                  <div key={index} style={{outline: "none"}}>
                    <div className="testimoni-card" style={{backgroundColor:'transparent', boxShadow:'none', textAlign:'center', height: 200}}>
                      <img src={t.pic} alt="customer" style={{width: 90, height: 90}} />
                      <div style={{marginTop: 10, fontSize: 24, fontWeight: 'bold'}}>{t.name}</div>
                      <div >{t.job}</div>
                    </div>
                    <div className="testimoni-card">
                          <div>
                            <div style={{fontSize: 48, color:'#60D1CB'}}>&ldquo; </div>
                            <div className="testimoni-content" dangerouslySetInnerHTML={{
                                __html: $lang[t.content_lang]
                              }}
                              />
                          </div>
                    </div>
                  </div>
                )}
              </Slider>
            </Col>
            <Col lg="1">
              <div className="sm-none xs-none">
                <div onClick={this.next} style={{fontSize: 48, marginTop: 100}}>
                  <BsChevronCompactRight />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>)
  }
}

export default Home3;
