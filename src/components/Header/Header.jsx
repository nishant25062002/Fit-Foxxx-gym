import React, { useState } from 'react';
import './Header.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useNavigate } from 'react-router-dom';

function Header() {
    const [pathName,setPathName]=useState(window.location.pathname)

    const navigate=useNavigate();
    return (
        <div className='Header'>
            <div className="Header_options">
                <div onClick={()=>{navigate('/')}} className={pathName==='/' ? 'activeTab':''}>Home</div>
                <div onClick={()=>{navigate('/about')}} className={pathName==='/about' ? 'activeTab':''} >About</div>
                <div onClick={()=>{navigate('/classses')}} className={pathName==='/classses' ? 'activeTab':''}>Classes</div>
                <div onClick={()=>{navigate('/blog')}} className={pathName==='/blog' ? 'activeTab':''}>Blog</div>
                <div onClick={()=>{navigate('/contact')}} className={pathName==='/contact' ? 'activeTab':''} >Contact</div>
            </div>
            <div className="Header_socialApp">
                <div><FacebookIcon /></div>
                <div><InstagramIcon /></div>
                <div><WhatsAppIcon /></div>
                <div><TwitterIcon /></div>
            </div>
        </div>
    )
}

export default Header