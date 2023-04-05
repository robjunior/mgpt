import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://app.monga.dev.br/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;