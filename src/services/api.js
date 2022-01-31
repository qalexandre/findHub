import axios from 'axios';

const Api = axios.create({baseUrl:"https://api.github.com"});

export default Api;