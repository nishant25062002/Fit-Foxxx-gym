import React from 'react';
import './Footer.css';
import styled from 'styled-components';
import '../CSS/bootstrap.css';
import TelegramIcon from '@mui/icons-material/Telegram';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';

function Footer() {
  return (
   
 
    <Section>
        <section className="footer_sec">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="footer__about">
                        <img src="https://firebasestorage.googleapis.com/v0/b/fitboxx-gym.appspot.com/o/Logos%2Ffitboxx.jpeg?alt=media&token=cc9ca798-5e1b-4ed6-8a91-16e16d5054c6" alt="" style={{width:'200px'}}/>
                        <ul>
                            <li><i className="fa fa-clock-o"></i> Mon - Fri: 6:00am - 10:00pm</li>
                            <li><i className="fa fa-clock-o"></i> Sat - 6:00am - 10:00pm</li>
                            <li><i className="fa fa-clock-o"></i> Sunday - Closed</li>
                        </ul>
                        <form action="#" className="subscribe-form">
                            <input type="text" placeholder="Your Email" />
                            <button type="submit">
                              {/* <i className="fa fa-send"></i> */}
                              <TelegramIcon style={{fontSize:"30px"}}/>
                              </button>
                        </form>
                    </div>
                </div>
                <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                    <div className="footer__widget">
                        <h5>Our Programmes</h5>
                        <ul>
                            <li><a href="#">Weight Gain</a></li>
                            <li><a href="#">Weight Loss</a></li>
                            <li><a href="#">Zumba Classes</a></li>
                            <li><a href="#">Muscle Training</a></li>
                            <li><a href="#">PCOD &amp; PCOS</a></li>
                            <li><a href="#">Diabetes </a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-6">
                    <div className="footer__widget">
                        <h5>About Us</h5>
                        <ul>
                            <li><a href="#">Our Vision</a></li>
                            <li><a href="#">Our Mission</a></li>
                            <li><a href="#">Meet The Team</a></li>
                            <li><a href="#">Blogs</a></li>
                            <li><a href="#">Testimonials</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="footer__widget">
                        <h5>Contact Us</h5>
                        <ul className="footer-address">
                         <li>  <PhoneIcon/> 99972 81881</li>
                          <li>  <EmailIcon/> fitboxxgym@gmail.com</li>
                           <li>  <HomeIcon/> <p className="address__text">526,yash plaza 1st floor kanwali road vasant vihar, above suvidha mega mart, Dehradun, Uttarakhand 248006</p></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer__copyright">
                <div className="row">
                    {/* <div className="col-lg-6 col-md-6 col-sm-6"> */}
                        <div className="footer__copyright__text">
                            <p>  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | FitBoxx Gym <i className="fa fa-heart" aria-hidden="true"></i> </p>
                        </div>
                    {/* </div> */}
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="footer__copyright__social">
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="https://www.instagram.com/fitboxxgym/?hl=en"><i className="fa fa-instagram"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

       
    </section>
    </Section>

    
   
  )
}

export default Footer

const Section = styled.div`
.footer_sec {
  background: $heading-color;
  padding-top: 70px;
}

.footer__about {
  margin-bottom: 30px;

  ul {
    margin-bottom: 25px;
    margin-top: 20px;

    li {
      color: #9B9EA3;
      line-height: 37px;
      font-size: 16px;
      list-style: none;

      i {
        font-size: 16px;
        color: #5768AD;
        margin-right: 5px;
      }
    }
  }

  .subscribe-form {
    position: relative;

    input {
      width: 100%;
      height: 50px;
      font-size: 14px;
      color: #999999;
      background: rgba(250, 250, 250, 0.1);
      border: none;
      border-radius: 2px;
      padding-left: 22px;
    }

    button {
      font-size: 20px;
      color: $white-color;
      display: inline-block;
      background: $primary-color;
      padding: 0 15px;
      border: none;
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
    }
  }
}

.footer__widget {
  margin-bottom: 30px;

  h5 {
    font-size: 20px;
    color: $white-color;
    margin-bottom: 25px;
  }

  ul {

    li {
      list-style: none;

      a {
        font-size: 16px;
        color: #9B9EA3;
        line-height: 37px;
      }
    }
  }

  .footer-address {

    li {
      list-style: none;
      font-size: 16px;
      color: #9B9EA3;
      line-height: 37px;

      i {
        margin-right: 8px;
      }
    }
  }
}

.footer__copyright {
  border-top: 1px solid rgba(225, 225, 225, 0.1);
  overflow: hidden;
  padding: 15px 0;
  margin-top: 20px;
}

.footer__copyright__text {

  p {
    font-size: 14px;
    color: #6e7580;
    margin-bottom: 0;
  }
  i {
    color: #a11f1f;
  }
  a {
    color: $primary-color;
  }
}

.footer__copyright__social {
  text-align: right;

  a {
    display: inline-block;
    font-size: 15px;
    color: $white-color;
    margin-right: 25px;

    &:last-child {
      margin-right: 0;
    }
  }
}
`