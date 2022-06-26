import React from 'react'
import './Main.css'
import Appointment from '../Appointment/Appointment'
import Home from '../Home/Home'
import Program from '../Program/Program'
import Schedule from '../Schedule/Schedule'
import Footer from '../Footer/Footer'
import Content from '../content/Content'
import Album from '../album/Album'

function Main() {
  return (
    <>
    <Home/>
    <Content/>
    <Album/>
    <Program/>
    <Appointment/>
    <Schedule/>
    <Footer/>
        </>
  )
}

export default Main