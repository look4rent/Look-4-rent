import React from 'react'

import { Avatar } from 'antd';

const MemberHeader =() => {
  return (
    <div className="member-header-container">
      <h1
      className="member-header-text"
      >Account Settings</h1>
      <h5>Username</h5><Avatar 
      size="large" icon="user"
      className="member-header-avatar" />
    </div>
  )
}

export default MemberHeader;