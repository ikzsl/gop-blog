import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import routes from '../routes';

const initialState = {
  currentUser: {},
  errors: {},
  loading: false,
  articles: [],
  articlesCount: 1,
  currentArticle: 1,
  currentPage: 1,
};

const appReducer = createSlice({
  name: 'appReducer',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.currentUser = {};
    },
    loginUser: (state, { payload }) => {
      state.currentUser = payload;
    },
    changeFetchStatus: (state, { payload }) => {
      state.erors = payload;
    },
    changeLoadingStatus: (state, { payload }) => {
      state.loading = payload;
    },
    loadArticlesList: (state, { payload }) => {
      state.articlesCount = payload.articlesCount;
      state.articles = payload.articles;
    },
    favoriteArticle: (state, { payload }) => {
      const likedArticle = state.articles.find((article) => article.slug === payload.slug);
      const newLikedArticle = { ...likedArticle };
      const idx = state.articles.findIndex((article) => article.slug === payload.slug);
      newLikedArticle.favorited = !likedArticle.favorited;
      newLikedArticle.favoritesCount = likedArticle.favorited
        ? newLikedArticle.favoritesCount - 1
        : newLikedArticle.favoritesCount + 1;
      // const newState = __.differenceWith(state, [likedArticle], __.isEqual);
      state.articles = [
        ...state.articles.slice(0, idx),
        newLikedArticle,
        ...state.articles.slice(idx + 1),
      ];
    },

    loadCurrentArticle: (state, { payload }) => {
      state.currentArticle = payload;
    },
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
    },
  },
});

const { actions, reducer } = appReducer;
export const {
  changeFetchStatus,
  changeLoadingStatus,
  loginUser,
  logoutUser,
  loadArticlesList,
  loadCurrentArticle,
  favoriteArticle,
  setCurrentPage,
} = actions;
export default reducer;

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
