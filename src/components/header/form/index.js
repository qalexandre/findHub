import React, { Fragment } from "react";

//Styles
import './style.css'

//Icons
import searchIcon from "../../../assets/icons/search.svg";

const Form = ({ query, setQuery, searchUser }) => {
  return (
    <div className="form">
      <div className="box-input">
        <img className="search-image" src={searchIcon} />
        <input
          className="search-input"
          value={query}
          placeholder="Github username"
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' ? searchUser(): null}
        />
      </div>
      <button className="search-button" onClick={searchUser}>
        Search
      </button>
    </div>
  );
};

export default Form;
