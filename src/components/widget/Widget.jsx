import React from "react";
import { BsDot } from "react-icons/bs";

const Widget = () => {
  const news = (newss) => (
    <div className="news">
      <span>
        <BsDot />
      </span>
      <p>{newss}</p>
    </div>
  );
  return (
    <>
      <div className="widget">
        <p>LinkedIn-AV News</p>

        <div className="widget_news">
          {news("lala")}
          {news("lala")}
          {news("lala")}
          {news("lala")}
          {news("lala")}
        </div>
      </div>
      <div className="about_linkedin"></div>
    </>
  );
};

export default Widget;
