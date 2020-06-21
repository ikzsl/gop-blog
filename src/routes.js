import axios from 'axios';

axios.defaults.baseURL = 'https://conduit.productionready.io/api/';

export default {
  userPostUrl: () => 'users',
  userLoginUrl: () => 'users/login',
  getProfileUrl: () => 'user',
  getArticlesListUrl: (limit = 10, offset = 0) => `articles?limit=${limit}&offset=${offset}`,
};
