import React from "react";

import ReactEmoji from 'react-emoji';

//Styles
import './style.css'

const Profile = ({avatar_url,name,login, bio}) => {
  return (
    <div className="profile">
      <img className="avatar" src={avatar_url} alt={login+'-avatar'}/> <p className="name">{name}</p>
      <p className='username'>{login}</p>
      <p className='bio'>{ReactEmoji.emojify(bio)}</p>
    </div>
  );
};

export default Profile;
