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
import AddForm from '../addForm/AddForm';
import EditForm from '../editForm/EditForm';
import PageNotFound from '../../pages/pageNotFound/pageNotFound';

import PrivateRoute from '../privateRoute/PrivateRoute';

import { Spacer, Container, LoaderContainer } from './style';

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

  const isLoggedIn = !!currentUser.id;
  return (
    <HashRouter>
      <Header />
      <LoaderContainer>
        <Loader loaded={!loading} />
      </LoaderContainer>
      <Container>
        <Spacer />
        <Switch>
          <Route path="/" component={Articles} exact />
          <Route path="/articles/:slug" component={Article} exact />
          <PrivateRoute
            condition={isLoggedIn}
            path="/articles/:slug/edit"
            redirectTo="/login"
            exact
          >
            <EditForm />
          </PrivateRoute>

          <PrivateRoute condition={!isLoggedIn} path="/login" redirectTo="/" exact>
            <LoginForm />
          </PrivateRoute>

          <PrivateRoute condition={!isLoggedIn} path="/signup" redirectTo="/" exact>
            <SignupForm />
          </PrivateRoute>

          <PrivateRoute condition={isLoggedIn} path="/add" redirectTo="/login" exact>
            <AddForm />
          </PrivateRoute>
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Container>
    </HashRouter>
  );
};

export default App;
