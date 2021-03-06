import React, { useEffect } from 'react'
import './Main.css'
import Appointment from '../Appointment/Appointment'
import Home from '../Home/Home'
import Program from '../Program/Program'
import Schedule from '../Schedule/Schedule'
import Footer from '../Footer/Footer'
import Content from '../content/Content'
import Album from '../album/Album'
import Head from '../Header/Head'
import HeadLine from '../GlobalComponents/HeadLine'

import Instructor from '../Instructor/Instructor'
import Accordian from '../Accordian/Accordian'


function Main() {

  return (
    <div className='Main'>
      <Home/>
      <Content />
      <HeadLine name={"Our Gallery"} desc={"The Way to get ahead is to get started, Sore today, Stronger tomorrow."}/>
      <Album />
      {/* <HeadLine name={"Our Programs"} desc={"Be motivated by what you can do, not defeated by what you can't."}/>
      <Program />`` */}
      {/* <HeadLine name={"Our Instructor"} desc={"This is the beautiful yogi and yoginis that have shared their journey and growth with us. Take a look!"}/>
      <Instructor/> */}
      {/* <Contact/> */}
      <HeadLine name={"Our Schedule"} desc={"Push harder than yesterday if you want a different tomorrow !!"}/>
      <Schedule />
      <HeadLine name={"FITBOXX FAQ'S"} desc={"Answer of all your queries are here !!"}/>
      <Accordian/>
      <HeadLine name={"Map"} desc={"We are here!!"}/>
      <Appointment />
     </div>
  )
}

export default Main