import React from "react";

//Styles
import "./style.css";

//Icons
import companyIcon from "../../../assets/icons/company.svg";
import companyIconDark from "../../../assets/icons/company-dark.svg";
import locationIcon from "../../../assets/icons/location.svg";
import locationIconDark from "../../../assets/icons/location-dark.svg";
import blogIcon from "../../../assets/icons/blog.svg";
import blogIconDark from "../../../assets/icons/blog-dark.svg";
import twitterIcon from "../../../assets/icons/twitter.svg";
import twitterIconDark from "../../../assets/icons/twitter-dark.svg";

const Links = ({ profile, theme }) => {
  return (
    <div className="links">
      <div className="flex-1">
        <div className="company">
        {theme === "dark" ? (
            <img src={companyIconDark} alt="company-icon" />
          ) : (
            <img src={companyIcon} alt="company-icon" />
          )}
          
          <p>{profile.company ? profile.company : "not avaiable"}</p>
        </div>
        <div className="location">
        {theme === "dark" ? (
            <img src={locationIconDark} alt="location-icon" />
          ) : (
            <img src={locationIcon} alt="location-icon" />
          )}
          <p>{profile.location ? profile.location : "not avaiable"}</p>
        </div>
      </div>

      <div className="flex-2">
        <div className="blog">
        {theme === "dark" ? (
            <img src={blogIconDark} alt="blog-icon" />
          ) : (
            <img src={blogIcon} alt="blog-icon" />
          )}
          <a target="_blank" href={profile.blog}>{profile.blog ? profile.blog : "not avaiable"}</a>
        </div>
        <div className="twitter">
        {theme === "dark" ? (
            <img src={twitterIconDark} alt="twitter-icon" />
          ) : (
            <img src={twitterIcon} alt="twitter-icon" />
          )}
          <p>{profile.twitter_username ? profile.twitter_username : "not avaiable"}</p>
        </div>
      </div>
    </div>
  );
};

export default Links;
