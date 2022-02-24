import axios from 'axios';

const api = axios.create({
  baseURL: 'https://discord.com/api/oauth2/authorize'
});

export { api }
