import React from 'react';
import './Home.css'
import Header from '../Header/Header'
import Head from '../Header/Head';

function HomePath({ pathName }) {
    return (
        <div className='Homee_Path'>
            <img src="./Images/banner.jpg" />
            <Header pathName={pathName} />
            <div className="home_body">
                <h2>FITBOXX GYM</h2>
                <h4>/ Contact Us</h4>
            </div>
        </div>
    )
}

export default HomePath