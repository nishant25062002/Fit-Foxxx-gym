import React from 'react';
import './Appointment.css'

function Appointment() {
  return (
    <div>
         {/* <!-- Appoinment Section Begin --> */}
    <section class="appointment">
        <div class="container">
            <div class="appointment__text">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title">
                            <img src="img/icon-white.png" alt=""/>
                            <h2>Make An Appointment</h2>
                        </div>
                    </div>
                </div>
                <form action="#" class="appointment__form">
                    <div class="row">
                        <div class="col-lg-6">
                            <input type="text" placeholder="Name"/>
                        </div>
                        <div class="col-lg-6">
                            <input type="text" placeholder="Email"/>
                        </div>
                        <div class="col-lg-6">
                            <input type="text" placeholder="Phone"/>
                        </div>
                        <div class="col-lg-6">
                        <input  type="date" id="date" name="date">
                            </input>
                        </div>
                        <div class="col-lg-12 text-center">
                            <textarea placeholder="Message"></textarea>
                            <button type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Appointment