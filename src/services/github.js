
const BASE_URL = "https://api.github.com";

let GitHub;

function getUserProfile(username) {
  return fetch(`${BASE_URL}/users/${username}`)
    .then((response) => response.json())
    .then((profile) => {
      if (!profile) {
        throw new Error(`${username} doesn't exist`);
      }

      return profile;
    });
}

async function getUserRepos(username) {
  return fetch(`${BASE_URL}/users/${username}/repos`)
    .then((response) => response.json())
    .then((repos) => {
      if (!repos) {
        throw new Error(`${username} doesn't exist`);
      }

      return repos;
    });
}

function getStarsCount(repos) {
  return repos.reduce(
    (count, { stargazers_count }) => count + stargazers_count,
    0
  );
}

 function formatDate(date) {
  return new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

 async function getUserData(username) {
  return Promise.all([getUserProfile(username), getUserRepos(username)]).then(
    ([profile, repos]) => {
      profile.user_starsCount = getStarsCount(repos);
      profile.created_at = formatDate(profile.created_at);
      return { profile, repos };
    }
  );
}

export default getUserData;

