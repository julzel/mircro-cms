import React from "react";
import LogoImage from "../../images/logo.png";
import "./Logo.scss";
import Image from "../Image";

const Logo: React.FC = () => {
  return (
    <div className="logo">
      <Image src={LogoImage} alt="Logo" className="logo-image" />
      <h1>Tasty Tracks - CMS Micro System</h1>
    </div>
  );
};

export default Logo;
