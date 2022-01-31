import React from "react";

//Components
import Form from "./form";

//Styles
import "./style.css";

//Icons
import themeDarkIcon from "../../assets/icons/dark-mode.svg";
import themeLightIcon from "../../assets/icons/light-mode.svg";

const Header = ({ query, setQuery, searchUser, theme, toggleTheme }) => {
  return (
    <div className="header">
      <div className="header-info">
        <h1 className="header-title">FIND HUB</h1>
        {theme === "dark" ? (
          <img
            onClick={toggleTheme}
            className="header-theme"
            src={themeLightIcon}
          />
        ) : (
          <img
            onClick={toggleTheme}
            className="header-theme"
            src={themeDarkIcon}
          />
        )}
      </div>
      <Form query={query} setQuery={setQuery} searchUser={searchUser} />
    </div>
  );
};

export default Header;
