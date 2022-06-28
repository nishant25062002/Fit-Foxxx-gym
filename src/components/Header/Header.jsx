import React from 'react';
import './Header.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';

function Header() {
    // const [pathName,setPathName]=useState(window.location.pathname)

    return (
        <div className='Header'>
            <div className="Header_options">
                <div className={'activeTab'}>Home</div>
                <div>About</div>
                <div>Classes</div>
                <div>Blog</div>
                <div>Contact</div>
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