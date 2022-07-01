import React from 'react'
import HeadLine from '../GlobalComponents/Head'
import Head from '../Header/Head'
import Program from '../Program/Program'

function About() {
  return (
    <>
    <Head/>
    <HeadLine name={"Our Programs"} desc={"Be motivated by what you can do, not defeated by what you can't."}/>
    <Program/>
    </>
  )
}

export default About
