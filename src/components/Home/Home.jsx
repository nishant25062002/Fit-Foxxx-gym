import React from 'react';
import './Home.css'
import Header from '../Header/Header'
import Head from '../Header/Head';

function Home() {
    return (
        <div className='Home'>
            <img src="./Images/banner.jpg" />
            <Head />
            <Header />
            <div className="home_body">
                <h2>FITBOXX GYM</h2>
                <h4>Here at fitbox we believe in making fitness</h4>
                <button>Become a member</button>
            </div>
        </div>
    )
}

export default Home