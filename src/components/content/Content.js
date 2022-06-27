import React from "react";
import './Content.css';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';

const Content = () => {
  return (
    <div className="wrapper">
        <div className="content__text">
          <div className="Head_about">
            Our Methods
          <div className="border_head"></div>
          </div>
          <p className="para__text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="Content_right Content_button"> More about us 
            <ArrowUpwardRoundedIcon className="ArrowAbout"/>
          </div>
        </div>

        <div className="content__video">
          <iframe width="100%" height="345" src="https://www.youtube.com/embed/x-upKQJ7zxM">
          </iframe>
        </div>
    </div>
  );
};

export default Content;
