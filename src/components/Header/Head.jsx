import React, { useState } from 'react'
import './Head.css';
import './Header.css';
import Drawer from 'react-modern-drawer'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import 'react-modern-drawer/dist/index.css'
import WhatsappRoundedIcon from '@mui/icons-material/WhatsappRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';

const Menu2 = styled.div`
  width: 100%;
  margin-left: 280px;
  margin-bottom: 50px;
  background: #0B0B0B;
 
  


  ul li {
    font-weight: 400;
    font-size: 18px;
    margin: 13.75px;
    margin-left:25px;
    font-family: "Roboto";
    font-style: normal;
    color:white;
  }
  @media (max-width: 768px) {
    // display:none;
    margin: 0;
    position: fixed;
    z-index: 999;
    background: #0B0B0B;
    transition: 0.3s;
    
    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: baseline;
      margin-left: 40px;
      margin-top: 30px;
      padding: 0;
      
      color:white;
      list-style:none
    }
    li {
      border: none;
      margin-left: 0 !important;
      margin-bottom: 15px !important;
      border-right-style: hidden;
      padding: 0;
      border-right-style: hidden !important;
      color:black;
    }
    a {
      margin: 0;
    }
  }
`;

function Head() {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }
  const [pathName, setPathName] = useState(window.location.pathname)

  const navigate = useNavigate();
  return (
    <>
      <div className='Head'>
        <div onClick={() => { navigate('/'); setPathName('/') }} className="Head1" style={{ fontSize: "32px", fontWeight: "700", letterSpacing: "1px" }}>
          <img src="https://firebasestorage.googleapis.com/v0/b/fitboxx-gym.appspot.com/o/Logos%2Ffitboxx.jpeg?alt=media&token=cc9ca798-5e1b-4ed6-8a91-16e16d5054c6"></img>
          {/* Fit Boxxx */}
        </div>
        <div className="Head2">
        <div className="mb-phone">
          <a href="tel:+91-89823799712"><img className="phone-m" src="./Images/phone.png" alt="" /></a>
         </div>
         <div style={{display:'flex',justifyContent:'center',alignItems:"center"}} className="">
         <a  style={{display:'flex',justifyContent:'center',alignItems:"center"}} href="whatsapp://send?phone=+91-89823799712">
          {/* <img className="mb-whatsapp" src="./Images/whatsapp.png"> */}
            {/* </img> */}
            <WhatsappRoundedIcon style={{fontSize:"27px", color: '#25D366',fontWeight:'700'}} className="mb-whatsapp"/>
            </a>

         </div>
         <div className="conn" onClick={toggleDrawer}>
          <MenuRoundedIcon fontSize='large'/>
          {/* <a href="#" class="hidden"></a>
          <a href="#" class="hidden"></a>
          <a href="#" class="hidden"></a> */}

        </div>
          <div className="Head2_div">
            Contact Number: 89823799712
          </div>
        
          <button>
            Join Us
          </button>
        </div>
      
       
      </div>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="blablabla"
      >
        <Menu2 className="Menu">
          <ul>
            <li>
              <div onClick={() => { navigate('/'); setPathName('/') }} className={pathName == '/' ? 'activeTab' : ''}>
                Home
              </div>
            </li>
            <li>
              <div onClick={() => { navigate('/about'); setPathName('/about') }} className={pathName == '/about' ? 'activeTab' : ''} >
                About
              </div>
            </li>
            <li>
              <div onClick={() => { navigate('/classses'); setPathName('/classses') }} className={pathName == '/classses' ? 'activeTab' : ''}>
                Classes
              </div>
            </li>
            <li>
              <div onClick={() => { navigate('/blog'); setPathName('/blog') }} className={pathName == '/blog' ? 'activeTab' : ''}>
                Blog
              </div>
            </li>
            <li>
              <div onClick={() => { navigate('/contact'); setPathName('/contact') }} className={pathName == '/contact' ? 'activeTab' : ''} >
                Contact
              </div>
            </li>


          </ul>
          <div className="Fitboxx_logo">
            <img src="./Images/Fitboxx_Logo.jpeg" alt="" />
          </div>
          <div className="Header_socialApp" style={{display:'flex',position:'absolute',bottom:'-100%',height:'100%',width:'100%'}}>
                <div><FacebookIcon /></div>
                <div><InstagramIcon /></div>
                <div><WhatsAppIcon /></div>
                <div><TwitterIcon /></div>
            </div>
        </Menu2>
      </Drawer>
    </>
  )
}

export default Head