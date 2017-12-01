import { create } from 'apisauce';
import { logInfo } from './ConsoleUtil.js';

const swigyUrl = 'https://staging1.zigway.co';
const authUrl = 'api/v1/auth-token/';
const api = create({
  baseURL: swigyUrl,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  //after 10 secons
  timeout: 10000,
});

export const authenticateUser = data => new Promise((resolve, reject) => {
  api
    .post(authUrl, data, null)
    .then((response) => {
      logInfo('response authenticateUser ', response);
      resolve(response);
    })
    .catch((error) => {
      logInfo('authenticateUser error:', error);
      reject(error);
    });
});
