import React from "react";

//Styles
import "./style.css";

//Icons
import starIcon from "../../assets/icons/star.svg";
import starIconDark from "../../assets/icons/star-dark.svg";

const Repos = ({ repositories, theme, formatDate }) => {
  return (
    <div className="repositoriesUser">
      {repositories.map((repo, index) => (
        <div key={index} className="repository">
          <a target="_blank" href={repo.html_url} className="repo-title">{repo.name}</a>
          <p>{repo.description ? repo.description : "no description"}</p>
          <div className="repo-info">
            <div className="repo-stars">{theme === 'light' ? <img src={starIcon}/> : <img src={starIconDark}/>}{repo.stargazers_count}</div>
            <div className="repo-updated">Updated at {formatDate(repo.updated_at)}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Repos;
