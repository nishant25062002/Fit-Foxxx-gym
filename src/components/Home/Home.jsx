import React, { useState } from 'react';
import './Home.css'
import Header from '../Header/Header'
import Head from '../Header/Head';
import styled from 'styled-components';

function Home({ pathName }) {

    const [showPop, setShowPop] = useState(false)

    return (
        <div className='Homee'>
            <img className="desk" src="./Images/banner.jpg" />
            <img className="mb-Homee" src="./Images/Fb_II.webp" />
            {!pathName && <Head pathName={pathName} />}
            <Header pathName={pathName} />
            <div className="home_body">
                <h2>FITBOXX GYM</h2>
                {!pathName &&
                    <> <h4>Strong People , Stronger Nation</h4>
                        <button onClick={() => { setShowPop(true) }}>Become a member</button>
                    </>
                }
                {pathName == '' &&
                    <> <h4>/ Contact Us</h4>
                    </>
                }
            </div>
            {showPop &&
                <Container>

                    <section className="appointment" style={{ margin: 0, padding: 0 }}>
                        <div className="container container2">
                            <div className="appointment__text">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <span>
                                            <p onClick={()=>{setShowPop(false)}}>X</p>
                                        </span>
                                        <div className="section-title">
                                            {/* <img src="img/icon-white.png" alt="" /> */}
                                            <h1>FITBOXX GYM</h1>
                                            <h2>Make An Appointment</h2>
                                        </div>
                                    </div>
                                </div>
                                <form action="#" className="appointment__form">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <input type="text" placeholder="Name" />
                                        </div>
                                        <div className="col-lg-6">
                                            <input type="text" placeholder="Email" />
                                        </div>
                                        <div className="col-lg-6">
                                            <input type="text" placeholder="Phone" />
                                        </div>
                                        <div className="col-lg-6">
                                            <input type="date" id="date" name="date">
                                            </input>
                                        </div>
                                        <div className="col-lg-12 text-center">
                                            <textarea placeholder="Message"></textarea>
                                            <button type="submit">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </Container>
            }
        </div>
    )
}

export default Home

const Container = styled.div`
position: fixed;
display:flex ;
top:0 ;
left:0 ;
right:0 ;
bottom:0 ;
height:100vh ;
width:100vw ;
align-items: center ;
justify-content: center ;
background-color: #191818b0;
z-index:10 ;
span{
    display: flex ;
    justify-content: flex-end ;
    width:100% ;
    padding-top:12px ;
}
p{
    height: 30px;
    background-color: white ;
    border-radius:99% ;
    width: 30px ;
    color:red;
    font-weight:700 ;
    display: flex ;
    align-items: center ;
    justify-content:center ;
    cursor: pointer;

}
.appointment__text{
     /* height: 98vh ; */
     min-height: fit-content !important ;
     padding-top:0 ;
}
textarea{
    resize: none ;
}
@media(max-width:769px) {
    .appointment__text{
        padding-bottom:13px ;
    }
    h1{
        font-size: 20px ;
    }
    h2{
        font-size:15px !important;
    }
    textarea{
    height:60px ;
}
}
`