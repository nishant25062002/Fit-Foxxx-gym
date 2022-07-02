import React from "react";
import Head from "../Header/Head";
import './About.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const About = () => {

  useEffect(

    ()=>{

      AOS.init({duration: 2000});
    },

    []


  );
  return (
    <>
    <Head/>
    <div className="about__container">
      <div className="about__flex">
      <div  data-aos="fade-left" className="left">
        <img className="left__img" src="./Images/Fb_II.webp"></img>
      </div>
      <div  data-aos="fade-right"  className="right">
        <div>
          <h3> About Me</h3>
        </div>
        <p className="right__text">

          Name --Pinaaki sen Age --25 Height --5.8 Weight --off season 75kg .
          Contest weight 65kg Body fat percentage--best condition 5to10% Fitness
          training qualifications= certified Personal fitness trainer from
          tejaswa muscle and supports academy dehradun Competitions participated
          in -university contest , state championship, federation cup,Mr North
          India Competitions won --inter university gold 60kg in 2009 ,Mr
          Uttarakhand 65kg 4th in 2010 ,Mr Uttarakhand gold 65kg in 2013 , Mr
          Uttarakhand gold 65kg gold in 2014,Mr Uttarakhand gold 65kg gold in
          2015 Kind of trainings u can give -muscle building ,fat loss ,
          metabolic , cross fits , aerobics , zumba , yoga
        </p>
      </div>
      </div>
    </div>
    </>
  );
};

export default About;
