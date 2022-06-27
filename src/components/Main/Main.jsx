import React from 'react'
import './Main.css'
import Appointment from '../Appointment/Appointment'
import Home from '../Home/Home'
import Program from '../Program/Program'
import Schedule from '../Schedule/Schedule'
import Footer from '../Footer/Footer'
import Content from '../content/Content'
import Album from '../album/Album'
import Head from '../Header/Head'
import HeadLine from '../GlobalComponents/Head'
import Contact from '../Contact/Contact'

function Main() {
  return (
    <div className='Main'>
      <Home />
      <Content />
      <HeadLine name={"Our Gallery"} desc={"This is the beautiful yogi and yoginis that have shared their journey and growth with us. Take a look!"}/>
      <Album />
      <HeadLine name={"Our Programs"} desc={"This is the beautiful yogi and yoginis that have shared their journey and growth with us. Take a look!"}/>
      <Program />
      <Contact/>
      <Appointment />
      <Schedule />
      <Footer />
    </div>
  )
}

export default Main