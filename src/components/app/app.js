import React, { useEffect } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader';
import { getProfileFetch, getArticlesListFetch } from '../../actions/actions';
import Header from '../header/Header';

import SignupForm from '../../pages/signupForm/SignupForm';
import LoginForm from '../../pages/loginForm/LoginForm';
import Articles from '../articles/Articles';
import Article from '../article/Article';
import PageNotFound from '../../pages/pageNotFound/pageNotFound';

// import PrivateRoute from '../privateRoute/PrivateRoute';
import PublicRoute from '../publicRoute/PublicRoute';

import './app.scss';

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(getProfileFetch());
    // eslint-disable-next-line
  }, [currentUser.id]);

  useEffect(() => {
    dispatch(getArticlesListFetch());
    // eslint-disable-next-line
  }, []);

  // const isLogged = !!currentUser.id;

  return (
    <HashRouter>
      <Header />
      <Loader loaded={!loading} className="loader" />
      <Switch>
        <Route exact path="/" component={Articles} />
        <Route path="/articles/:slug" component={Article} />
        <PublicRoute exact path="/login" component={LoginForm} />
        <PublicRoute exact path="/signup" component={SignupForm} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </HashRouter>
  );
};

export default App;
