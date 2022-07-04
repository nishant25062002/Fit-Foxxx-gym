import React from 'react';
import './Appointment.css'

function Appointment() {
  return (
      <>
    <div className="appointment__wrap">
         {/* <!-- Appoinment Section Begin --> */}
    {/* <section className="appointment" style={{margin:0,padding:0}}>
        <div className="container container2">
            <div className="appointment__text">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <img src="img/icon-white.png" alt=""/>
                            <h1>FITBOXX GYM</h1>
                            <h2>Make An Appointment</h2>
                        </div>
                    </div>
                </div>
                <form action="#" className="appointment__form">
                    <div className="row">
                        <div className="col-lg-6">
                            <input type="text" placeholder="Name"/>
                        </div>
                        <div className="col-lg-6">
                            <input type="text" placeholder="Email"/>
                        </div>
                        <div className="col-lg-6">
                            <input type="text" placeholder="Phone"/>
                        </div>
                        <div className="col-lg-6">
                        <input  type="date" id="date" name="date">
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
    </section> */}
    <div className="Map_address">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.901081022395!2d78.00216781512174!3d30.32533138178094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092a113bdb39a5%3A0xa13d0417c44b5154!2sFitboxx%20Gym!5e0!3m2!1sen!2sin!4v1656407840580!5m2!1sen!2sin" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </div>
    
    
    
    </>
  )
}

export default Appointment