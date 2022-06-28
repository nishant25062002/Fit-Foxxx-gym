import React from 'react'
import Header from '../Header/Header'
import HomePath from '../Home/HomePath'
import './Contact.css'

function Contact() {
  return (
    <>
    <Header/>
      <div class="contact3 py-5">
        <div class="row no-gutters">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="card-shadow">
                  <img src="./Images/contact.jpg" class="img-fluid" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="contact-box ml-3">
                  <h1 class="font-weight-light mt-2">Contact Us</h1>
                  <form class="mt-4">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="form-group mt-2">
                          <input class="form-control" type="text" placeholder="name" />
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="form-group mt-2">
                          <input class="form-control" type="email" placeholder="email address" />
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="form-group mt-2">
                          <input class="form-control" type="text" placeholder="phone" />
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="form-group mt-2">
                          <textarea class="form-control" rows="3" placeholder="message"></textarea>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <button type="submit" class="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"><span> SUBMIT</span></button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="card mt-4 border-0 mb-4">
                  <div class="row">
                    <div class="col-lg-4 col-md-4">
                      <div class="card-body d-flex align-items-center c-detail pl-0">
                        <div class="mr-3 align-self-center">
                          <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png" />
                        </div>
                        <div class="">
                          <h6 class="font-weight-medium">Address</h6>
                          <p class="">526,yash plaza 1st floor kanwali road vasant vihar,above Suvidha mega mart,
                            <br /> Dehradun, Uttarakhand 248006</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-4">
                      <div class="card-body d-flex align-items-center c-detail">
                        <div class="mr-3 align-self-center">
                          <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png" />
                        </div>
                        <div class="">
                          <h6 class="font-weight-medium">Phone</h6>
                          <p class="">099972 81881
                            <br />89823799712</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-4">
                      <div class="card-body d-flex align-items-center c-detail">
                        <div class="mr-3 align-self-center">
                          <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png" />
                        </div>
                        <div class="">
                          <h6 class="font-weight-medium">Email</h6>
                          <p class="">
                            info@gmail.com
                            <br /> 123@gmail.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact