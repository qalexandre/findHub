import React from "react";

//Styles
import "./style.css";

//Icons
import repositoriesIcon from "../../../assets/icons/repository.svg";
import repositoriesIconDark from "../../../assets/icons/repository-dark.svg";
import starsIcon from "../../../assets/icons/star.svg";
import starsIconDark from "../../../assets/icons/star-dark.svg";
import followersIcon from "../../../assets/icons/follower.svg";
import followersIconDark from "../../../assets/icons/follower-dark.svg";
import followingIcon from "../../../assets/icons/following.svg";
import followingIconDark from "../../../assets/icons/following-dark.svg";

const GitInfo = ({  repoCount, profile, theme, }) => {
  return (
    <div className="git-info">
      <div className="repositories">
        <div className="repositories-flex">
          {theme === "dark" ? (
            <img src={repositoriesIconDark} alt="repositories-icon" />
          ) : (
            <img src={repositoriesIcon} alt="repositories-icon" />
          )}
          <p className="info-paragraph">Repositories</p>
        </div>
        <div className="box-count">{repoCount}</div>
      </div>
      <div className="followers">
        <div className="followers-flex">
          <p className="info-paragraph">Followers</p>
          {theme === "dark" ? (
            <img src={followersIconDark} alt="followers-icon" />
          ) : (
            <img src={followersIcon} alt="followers-icon" />
          )}
        </div>

        <div className="box-count">{profile.followers}</div>
      </div>
      <div className="stars">
        <div className="stars-flex">
        {theme === "dark" ? (
            <img src={starsIconDark} alt="stars-icon" />
          ) : (
            <img src={starsIcon} alt="stars-icon" />
          )}
          <p className="info-paragraph">Stars</p>
        </div>

        <div className="box-count">{profile.user_starsCount}</div>
      </div>
      <div className="following">
        <div className="following-flex">
          <p className="info-paragraph">Following</p>
          {theme === "dark" ? (
            <img src={followingIconDark} alt="following-icon" />
          ) : (
            <img src={followingIcon} alt="following-icon" />
          )}
        </div>

        <div className="box-count">{profile.following}</div>
      </div>
    </div>
  );
};

export default GitInfo;
