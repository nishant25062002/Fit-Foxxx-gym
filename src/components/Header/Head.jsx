import React,{useState} from 'react'
import './Head.css';
import './Header.css';
import Drawer from 'react-modern-drawer'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import 'react-modern-drawer/dist/index.css'

const Menu2 = styled.div`
  width: 60%;
  margin-left: 280px;
  margin-bottom: 50px;


  ul li {
    font-weight: 400;
    font-size: 18px;
    margin: 13.75px;
    font-family: "Roboto";
    font-style: normal;
  }
  @media (max-width: 768px) {
    // display:none;
    margin: 0;
    position: fixed;
    z-index: 999;
    background: white;
    transition: 0.3s;
    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: baseline;
      margin-left: 40px;
      margin-top: 30px;
      padding: 0;
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
            <div className="Head1" style={{fontSize:"32px",fontWeight:"700",letterSpacing:"1px"}}>
                {/* <img src="./Images/logo_gym.png"></img> */}
                Fit Boxxx
            </div>
            <div className="Head2">
                <div className="Head2_div">
                    Contact Number: 89823799712
                </div>
                <button>
                    Join Us
                </button>
            </div>
            <div className="conn" onClick={toggleDrawer}>
        <a href="#" class="hidden"></a>
            <a href="#" class="hidden"></a>
            <a href="#" class="hidden"></a>

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
        </Menu2>
      </Drawer>
        </>
    )
}

export default Head