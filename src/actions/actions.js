import axios from 'axios';
import { createAction } from 'redux-actions';
import routes from '../routes';

export const changeFetchStatus = createAction('CHANGE_FETCH_STATUS');
export const changeLoadingStatus = createAction('CHANGE_LOADING_STATUS');
export const loginUser = createAction('LOGIN_USER');
export const logoutUser = createAction('LOGOUT_USER');

const userFetch = async (user, dispatch, url) => {
  const response = await axios.post(url, { user });
  const { data } = response;
  localStorage.setItem('token', data.user.token);
  dispatch(changeFetchStatus(null));
  dispatch(loginUser(data.user));
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
    await axios.interceptors.request.use((config) => {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Token ${token}`;
      return config;
    });
    const url = routes.getProfileUrl();
    const response = await axios.get(url);
    const { data } = response;
    dispatch(loginUser(data.user));
    dispatch(changeLoadingStatus(false));
  } catch (err) {
    if (err.response.status === 401) {
      localStorage.removeItem('token');
    }
    dispatch(changeLoadingStatus(false));
  }
};
