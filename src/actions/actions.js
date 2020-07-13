import axios from 'axios';
import { createAction } from 'redux-actions';
import routes from '../routes';

export const changeFetchStatus = createAction('CHANGE_FETCH_STATUS');
export const changeLoadingStatus = createAction('CHANGE_LOADING_STATUS');
export const loginUser = createAction('LOGIN_USER');
export const logoutUser = createAction('LOGOUT_USER');
export const loadArticlesList = createAction('LOAD_ARTICLES_LIST');
export const loadCurrentArticle = createAction('LOAD_CURRENT_ARTICLE');
export const favoriteArticle = createAction('FAVORITE_ARTICLE');
export const setCurrentPage = createAction('SET_CURRENT_PAGE');

const userFetch = async (user, dispatch, url) => {
  const response = await axios.post(url, { user });
  const { data } = response;
  localStorage.setItem('token', data.user.token);
  dispatch(changeFetchStatus({}));
  dispatch(loginUser(data.user));
};

// ------------------ articleDeleteFetch ----------------------
export const articleDeleteFetch = (slug) => async (dispatch) => {
  dispatch(changeLoadingStatus(true));
  try {
    const url = routes.articleDeleteUrl(slug);
    await axios.delete(url);
    dispatch(changeLoadingStatus(false));
  } catch ({ response }) {
    const { errors } = response.data;
    dispatch(changeFetchStatus(errors));
    dispatch(changeLoadingStatus(false));
  }
};

// ------------------ articleEditFetch ----------------------
export const articleEditFetch = (article, slug) => async (dispatch) => {
  dispatch(changeLoadingStatus(true));
  try {
    const url = routes.articleEditUrl(slug);
    await axios.put(url, { article });
    dispatch(changeLoadingStatus(false));
  } catch ({ response }) {
    const { errors } = response.data;
    dispatch(changeFetchStatus(errors));
    dispatch(changeLoadingStatus(false));
  }
};

// ------------------ articlePostFetch ----------------------
export const articlePostFetch = (article, setFieldError) => async (dispatch) => {
  dispatch(changeLoadingStatus(true));
  try {
    const url = routes.articlePostUrl();
    await axios.post(url, { article });
    dispatch(changeLoadingStatus(false));
  } catch ({ response }) {
    const { errors } = response.data;
    dispatch(changeFetchStatus(errors));
    dispatch(changeLoadingStatus(false));
    setFieldError('title', errors.title);
    setFieldError('description', errors.description);
    setFieldError('body', errors.body);
  }
};

// --------------------setFavoriteArticle--------------------
export const setFavoriteArticle = (slug, favorited) => async (dispatch) => {
  try {
    dispatch(favoriteArticle({ slug, favorited }));
    const url = routes.setFavoriteArticleURL(slug, favorited);
    await (favorited ? axios.delete(url) : axios.post(url));
    dispatch(changeFetchStatus({}));
  } catch (err) {
    dispatch(changeFetchStatus(err));
  }
};

// --------------------getCurrentArticleFetch--------------------
export const getCurrentArticleFetch = (slug) => async (dispatch) => {
  // dispatch(changeLoadingStatus(true));
  try {
    const url = routes.getArticleUrl(slug);
    const response = await axios.get(url);
    const { article } = response.data;
    dispatch(loadCurrentArticle(article));
    // dispatch(changeLoadingStatus(false));
  } catch (err) {
    // dispatch(changeLoadingStatus(false));
  }
};

// --------------------getArticlesFetch--------------------
export const getArticlesListFetch = (limit, offset) => async (dispatch) => {
  dispatch(changeLoadingStatus(true));
  try {
    const url = routes.getArticlesListUrl(limit, offset);
    const response = await axios.get(url);
    const { data } = response;
    dispatch(loadArticlesList(data));
    dispatch(changeLoadingStatus(false));
  } catch (err) {
    dispatch(changeLoadingStatus(false));
  }
};

// ------------------ userPostFetch ----------------------
export const userPostFetch = (user, setFieldError) => async (dispatch) => {
  dispatch(changeLoadingStatus(true));
  try {
    await userFetch(user, dispatch, routes.userPostUrl());
    dispatch(changeLoadingStatus(false));
  } catch ({ response }) {
    const { errors } = response.data;
    dispatch(changeFetchStatus(errors));
    dispatch(changeLoadingStatus(false));
    setFieldError('email', errors.email);
    setFieldError('username', errors.username);
    setFieldError('password', errors.password);
  }
};

// ------------------ userLoginFetch ----------------------
export const userLoginFetch = (user, setFieldError) => async (dispatch) => {
  dispatch(changeLoadingStatus(true));
  try {
    await userFetch(user, dispatch, routes.userLoginUrl());
    dispatch(changeLoadingStatus(false));
  } catch ({ response }) {
    const { errors } = response.data;
    dispatch(changeFetchStatus(errors));
    dispatch(changeLoadingStatus(false));
    // setFieldError('email', `email or password ${errors['email or password']}`);
    setFieldError('password', `email or password ${errors['email or password']}`);
  }
};

// --------------------getProfileFetch--------------------
export const getProfileFetch = () => async (dispatch) => {
  const { token } = localStorage;
  if (!token) {
    return;
  }
  dispatch(changeLoadingStatus(true));
  try {
    // axios.interceptors.request.use((config) => {
    //   // eslint-disable-next-line no-param-reassign
    //   config.headers.Authorization = `Token ${token}`;
    //   return config;
    // });
    const url = routes.getProfileUrl();
    const response = await axios.get(url);
    const { data } = response;
    dispatch(loginUser(data.user));
    dispatch(changeLoadingStatus(false));
    dispatch(changeFetchStatus({}));
  } catch (err) {
    dispatch(changeFetchStatus(err));
    dispatch(changeLoadingStatus(false));
  }
};
