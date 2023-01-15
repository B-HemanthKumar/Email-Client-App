import React from "react";
import "./avatar.css";

const Avatar = ({ email }) => {
  return (
    <div className="avatar">
      <span>{email.from.name[0].toUpperCase()}</span>
    </div>
  );
};

export default Avatar;
