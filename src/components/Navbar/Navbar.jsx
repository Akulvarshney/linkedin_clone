import React from "react";
import { AiFillLinkedin, AiOutlineSearch } from "react-icons/ai";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NavbarOptions from "./NavbarOptions";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <AiFillLinkedin className="navbar__logo" />
        <div className="navbar__search">
          <AiOutlineSearch />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="navbar__right">
        <NavbarOptions title="Home" Icon={HomeIcon} />
        <NavbarOptions title="My Network" Icon={PeopleIcon} />
        <NavbarOptions title="Jobs" Icon={BusinessCenterIcon} />
        <NavbarOptions title="Messaging" Icon={ForumIcon} />
        <NavbarOptions title="Notification" Icon={NotificationsIcon} />
        <NavbarOptions
          title="Me"
          avatar="https://media.licdn.com/dms/image/D4D03AQEvpyBoac3kfg/profile-displayphoto-shrink_100_100/0/1671250175788?e=1678924800&v=beta&t=veXTRgRzUliq6HKhi1qbgD-ou3TbsEXxGCeyLYBW11c"
        />
      </div>
    </div>
  );
};

export default Navbar;
