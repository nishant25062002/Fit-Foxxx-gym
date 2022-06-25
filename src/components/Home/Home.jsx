import React from 'react';
import './Home.css'
import Header from '../Header/Header'
import Head from '../Header/Head';

function Home() {
    return (
        <div className='Home'>
            <img src='https://ugc.futurelearn.com/uploads/images/bf/88/large_hero_bf882a24-9054-42e3-a310-c5d0bacf13a1.jpeg' />
            <Head />
            <Header />
            <div className="home_body">
                <h2>Here at fitbox we believe in making fitness</h2>
                <h4>To make fitness an enjoyable experience by providing the ultimate fitness experience at all levels</h4>
                <button>Become a member</button>
            </div>
        </div>
    )
}

export default Home