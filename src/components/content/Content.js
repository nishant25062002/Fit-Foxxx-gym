import React,{useEffect} from "react";
import "./Content.css";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Content = () => {
  useEffect(

    () =>{

      AOS.init({duration: 2000});
    },

    []


  );
  return (
    <div className="wrapper">
      <div data-aos="fade-left" className="content__text">
        <div  className="Head_about">
          Our Methods
          <div className="border_head"></div>
        </div>
        <p className="para__text">
          We at <span>Fitboxx</span> believe in making fitness.We will coach you and help you
          achieve your health goals.We aspire to make fitness an enjoyable
          experience by providing the ultimate fitness experience at all levels.
          Various Activities which are included in Fitboxx are as follows Weight
          Gain , Weight Loss , Strengthening , Stretching , Dieticians and
          Nutritionists to help with diets , Certified trainers to guide with
          the workouts.
        </p>
        <div className="Content_right Content_button">
          {" "}
          More about us
          <ArrowUpwardRoundedIcon className="ArrowAbout" />
        </div>
      </div>

      <div  className="content__video">
        <iframe
          width="100%"
          height="345"
          src="https://www.youtube.com/embed/x-upKQJ7zxM"
        ></iframe>
      </div>
    </div>
  );
};

export default Content;
