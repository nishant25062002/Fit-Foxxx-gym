
import React, { useState,useEffect } from "react";
import Icon from "../GlobalComponents/Icon";
import { css } from "@emotion/react";
import scheduleBg from "../Image/scheduleBg.jpg";
import ScheduleLinks from "./ScheduleLinks";
import Table from "./Table";
import Container from "../GlobalComponents/Container";
import './Schedule.css'
import HeadLine from "../GlobalComponents/HeadLine";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Schedule = () => {
  // useEffect(

  //   () =>{
  //     AOS.init({duration: 2000});
  //   },

  //   []


  // );
  const [hidden, setHidden] = useState(false);
  const [day, setDay] = useState("Monday");

  return (
    <section data-aos="ease-in" className="schedule stripe" id="schedule">
      <div className="Container_schedule">
        <ScheduleLinks setDay={setDay} day={day} />
        <Table day={day} />
      </div>
    </section>
  );
};

export default Schedule;
