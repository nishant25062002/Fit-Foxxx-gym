import React, { useEffect } from "react";
import Head from "../Header/Head";
import "./About.css";
import AOS from "aos";
// import "aos/dist/aos.css";
import Header from "../Header/Header";
import HeadLine from "../GlobalComponents/HeadLine";

const About = () => {
  // useEffect(() => {
  //   AOS.init({ duration: 2000 });
  // }, []);

  return (
    <>
      <Head />
      <Header />
      <div className="about__container">
        <HeadLine name={"About Fitboxx"} />
        <div className="about__flex">
        {/* data-aos="fade-left" */}
          <div className="left">
            <img className="left__img" src="./Images/Fb_II.webp"></img>
          </div>
          <div className="right">
            <p className="right__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
        <div className="owner__container">
          <div className="owner__left">
          <img className="left__img" src="./Images/Fb_II.webp"></img>
          </div>
          <div className="owner__right">
            <div className="owner__text">
              <p> Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
