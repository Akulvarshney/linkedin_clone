import { Avatar } from "@mui/material";
import React from "react";
import InputOptions from "./InputOptions";
import { IoMdPhotos } from "react-icons/io";
import { RxVideo } from "react-icons/rx";
import { SlCalender } from "react-icons/sl";
import { MdOutlineArticle } from "react-icons/md";
import Post from "./Post";

const Feed = () => {
  return (
    <div className="feed">
      <div className="home_post">
        <div className="home_post_top">
          <Avatar className="home_user_avatar" />
          <form className="post_Form">
            {/* <textarea /> */}
            <input type="text" />
            <button type="submit">Post</button>
          </form>
        </div>
        <div className="home_post_bottom">
          <InputOptions title="Photo" icon={<IoMdPhotos />} color="#378fe9" />
          <InputOptions title="Photo" icon={<RxVideo />} color="#5f9b41 " />
          <InputOptions title="Photo" icon={<SlCalender />} color=" #c37d16" />
          <InputOptions
            title="Photo"
            icon={<MdOutlineArticle />}
            color="#e14745 "
          />
        </div>
      </div>

      <div className="home_feed">
        <Post
          name="Akul Varshney"
          description="Almost Done!"
          heading="MERN Stack Developer"
        />
        <Post
          name="Akul Varshney"
          description="Almost Done!"
          heading="MERN Stack Developer"
        />
        <Post
          name="Akul Varshney"
          description="Almost Done!"
          heading="MERN Stack Developer"
        />
        <Post
          name="Akul Varshney"
          description="Almost Done!"
          heading="MERN Stack Developer"
        />
        <Post
          name="Akul Varshney"
          description="Almost Done!"
          heading="MERN Stack Developer"
        />
        <Post
          name="Akul Varshney"
          description="Almost Done!"
          heading="MERN Stack Developer"
        />
        <Post
          name="Akul Varshney"
          description="Almost Done!"
          heading="MERN Stack Developer"
        />
        <Post
          name="Akul Varshney"
          description="Almost Done!"
          heading="MERN Stack Developer"
        />
        <Post
          name="Akul Varshney"
          description="Almost Done!"
          heading="MERN Stack Developer"
        />
        <Post
          name="Akul Varshney"
          description="Almost Done!"
          heading="MERN Stack Developer"
        />
        <Post
          name="Akul Varshney"
          description="Almost Done!"
          heading="MERN Stack Developer"
        />
      </div>
    </div>
  );
};

export default Feed;
