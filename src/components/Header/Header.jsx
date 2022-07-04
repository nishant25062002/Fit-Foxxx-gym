import React, { useState } from 'react';
import './Header.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useNavigate } from 'react-router-dom';

function Header() {
    const [pathName, setPathName] = useState(window.location.pathname)

    const navigate = useNavigate();
    return (
        <div className='Header'>
            <div className="Header_options">
                <div onClick={() => { navigate('/'); setPathName('/') }} className={pathName == '/' ? 'activeTab' : ''}>
                    Home
                </div>

                <div onClick={() => { navigate('/about'); setPathName('/about') }} className={pathName == '/about' ? 'activeTab' : ''} >
                    About
                </div>

                <div onClick={() => { navigate('/classses'); setPathName('/classses') }} className={pathName == '/classses' ? 'activeTab' : ''}>
                    Courses
                </div>

                <div onClick={() => { navigate('/blogs'); setPathName('/blogs') }} className={pathName == '/blogs' ? 'activeTab' : ''}>
                    Blogs
                </div>

                {/* <div onClick={() => { navigate('/blog'); setPathName('/blog') }} className={pathName == '/blog' ? 'activeTab' : ''}>
                    Weight Gain
                </div> */}

                {/* <div onClick={() => { navigate('/blog2'); setPathName('/blog2') }} className={pathName == '/blog' ? 'activeTab' : ''}>
                   Hypertension
                </div> */}

                <div onClick={() => { navigate('/contact'); setPathName('/contact') }} className={pathName == '/contact' ? 'activeTab' : ''} >
                    Contact
                </div>
            </div>
            <div className="Header_socialApp">
                <div><a href="https://m.facebook.com/profile.php?id=237598579905306&paipv=0"><FacebookIcon /></a></div>
                <div><a href="https://www.instagram.com/fitboxxgym/?hl=en"><InstagramIcon /></a></div>
                <div><a href="whatsapp://send?phone=+91-9997281881"><WhatsAppIcon /></a></div>
                <div><TwitterIcon /></div>
            </div>
        </div>
    )
  
}

export default Header