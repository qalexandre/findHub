import React from "react";

//Components
import Profile from "./profile";
import GitInfo from "./git-info";
import Links from "./links";

//Styles
import "./style.css";

const Main = ({profile,repositories,repoCount, theme,}) => {
  return (
    <main className='main'>
      <Profile avatar_url={profile.avatar_url} name={profile.name} login={profile.login} bio={profile.bio}/>
      <div className='flex-mobile'>
        <GitInfo  theme={theme} repoCount={repoCount} repositories={repositories} profile={profile}/>
        <Links theme={theme} profile={profile} />
      </div>
    </main>
  );
};
 export default Main;