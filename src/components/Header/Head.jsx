import React from 'react'
import './Head.css';
import './Header.css';
function Head() {
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
        </div>
        </>
    )
}

export default Head