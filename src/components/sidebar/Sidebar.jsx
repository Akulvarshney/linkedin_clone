import { Avatar } from "@mui/material";
import React from "react";

const Sidebar = () => {
  const recentItem = (topic) => (
    <div className="recent_Item">
      <span>#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="home_user">
        <img
          src="https://media.licdn.com/dms/image/C4E16AQEtT1tit3uJdg/profile-displaybackgroundimage-shrink_350_1400/0/1600414907612?e=1678924800&v=beta&t=shiqs5Pz7zcDiOfrNcdAoaLcoKXGWf1ScsgHdYW5y7w"
          alt=""
        />
        <Avatar className="home_user_avatar" />
        <h4>Akul Varshney</h4>
        <p className="user_header">
          MERN Stack Developer || Programmer (C++) || Amity'23
        </p>

        <div className="home_userStats">
          <div className="home_userStat">
            <p>Who's viewed your profile</p>
            <p className="home_userStatNumber">34</p>
          </div>
          <div className="home_userStat">
            <p>Impressions of your post</p>
            <p className="home_userStatNumber">586</p>
          </div>
        </div>

        <div className="home_buyPremium">
          <p>Access exclusive tools and insights.</p>
        </div>
      </div>

      <div className="home_recent">
        <p>Recents</p>
        {recentItem("C++")}
        {recentItem("MERN Stack")}
        {recentItem("Reactjs")}
        {recentItem("NodeJs")}
      </div>
    </div>
  );
};

export default Sidebar;
