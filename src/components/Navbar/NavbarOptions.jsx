import { Avatar } from "@mui/material";
import React from "react";

const NavbarOptions = ({ title, avatar, Icon }) => {
  return (
    <div className="NavbarOptions">
      {Icon && <Icon className="navbarOption__icon" />}
      {avatar && <Avatar className="navbarOption__icon" src={avatar} />}
      <p>{title}</p>
    </div>
  );
};

export default NavbarOptions;
