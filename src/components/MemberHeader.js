import React from "react";

import { Avatar } from "antd";

const MemberHeader = (props) => {
  return (
    <div className="member-header-container">
      <h1 className="member-header-text">{props.header}</h1>
      <div className="avatar-container">
      <Avatar size="large" icon="user" className="member-header-avatar" />
      </div>
      
    </div>
  );
};

export default MemberHeader;
