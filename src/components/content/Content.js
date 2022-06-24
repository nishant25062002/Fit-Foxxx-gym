import React from "react";
import './Content.css';

const Content = () => {
  return (
    <div className="wrapper">
      <div className="first-content">
        <div className="content__text">
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
        </div>
      </div>

      <div className="second-video">
        <div className="content__video">
        <iframe width="420" height="345" src="https://www.youtube.com/embed/x-upKQJ7zxM">
</iframe>
        </div>
      </div>
    </div>
  );
};

export default Content;
