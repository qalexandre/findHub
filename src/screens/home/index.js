import React, { useState, useEffect, Fragment } from "react";
import useLocalStorage from "use-local-storage";

//API
import getUserData from "../../services/github";

//Components
import Header from "../../components/header";
import Main from "../../components/main";
import Repos from "../../components/repos";

//Styles
import "../../index.css";
import "./style.css";

const HomeScreen = () => {
  const [query, setQuery] = useState("");
  const [profile, setProfile] = useState({
    name: "",
    login: "",
    bio: "",
    avatar_url: "",
    followers: 0,
    following: 0,
    company: "",
    location: "",
    blog: "",
    twitter_username: "",
    user_starsCount: 0,
  });
  const [repositories, setRepositories] = useState([]);
  const [repoCount, setRepoCount] = useState(0);
  const [showProfile, setShowProfile] = useState(false);
  const [showRepositories, setShowRepositories] = useState(false);
  const defaultLight = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultLight ? "light" : "dark"
  );

  document.title = "FindHub";

  const searchUser = async () => {
    try {
      const { profile, repos } = await getUserData(query);
      setProfile(profile);
      setRepositories(repos);
      setRepoCount(repos.length);
      setShowProfile(true);
      setShowRepositories(true);
    } catch (error) {
      alert("User not find");
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme !== "light" || localTheme !== "dark") setTheme("light");
    else setTheme(localTheme);
  }, []);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <Fragment>
      <div className="container" data-theme={theme}>
        <Header
          query={query}
          setQuery={setQuery}
          searchUser={searchUser}
          theme={theme}
          toggleTheme={toggleTheme}
        />
        {showProfile && (
          <Main
            profile={profile}
            repositories={repositories}
            repoCount={repoCount}
            theme={theme}
          />
        )}
      </div>
      {showRepositories === true ? (
        <div data-theme={theme}>
          <Repos
            formatDate={formatDate}
            theme={theme}
            repositories={repositories}
          />
        </div>
      ) : null}
    </Fragment>
  );
};

export default HomeScreen;
