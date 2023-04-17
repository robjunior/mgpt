import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://app.monga.dev.br/api/v1/',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
});

export default instance;