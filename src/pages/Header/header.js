import React from "react";
import "./header.css";
import LOGO from "../../assets/logo.png";

const header = () => {
  return (
    <div className="headerr">
        <img src={LOGO} className="logo" />
     
    </div>
  );
};

export default header;
