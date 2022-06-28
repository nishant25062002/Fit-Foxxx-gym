import React from 'react';
import './Home.css'
import Header from '../Header/Header'
import Head from '../Header/Head';

function Home({ pathName }) {
    return (
        <div className='Homee'>
            <img src="./Images/banner.jpg" />
            {!pathName && <Head pathName={pathName} />}
            <Header pathName={pathName} />
            <div className="home_body">
                <h2>FITBOXX GYM</h2>
                {!pathName &&
                    <> <h4>Here at fitbox we believe in making fitness</h4>
                        <button>Become a member</button>
                    </>
                }
                {pathName == '' &&
                    <> <h4>/ Contact Us</h4>
                    </>
                }
            </div>
        </div>
    )
}

export default Home