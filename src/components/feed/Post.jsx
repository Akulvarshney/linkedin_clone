import { Avatar } from "@mui/material";
import React from "react";
import InputOptions from "./InputOptions";
import { AiFillLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { FiSend } from "react-icons/fi";

const Post = ({ name, description, heading, user_photo, image }) => {
  return (
    <div className="post">
      <div className="user_info">
        <Avatar src={user_photo} />
        <div className="user_detail">
          <p>{name}</p>
          <p>{heading}</p>
        </div>
      </div>

      <div className="user_thoughts">
        <p className="content">{description}</p>
        {image && (
          <img src={image} alt="couldn't load" className="post_image" />
        )}
      </div>

      <div className="likes">
        <InputOptions title="Like" icon={<AiFillLike />} color="gray" />
        <InputOptions
          title="Comment"
          icon={<FaRegCommentDots />}
          color="gray"
        />
        <InputOptions title="Repost" icon={<BiRepost />} color="gray" />
        <InputOptions title="Send" icon={<FiSend />} color="gray" />
      </div>
    </div>
  );
};

export default Post;
