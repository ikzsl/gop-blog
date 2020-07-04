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
import PageNotFound from '../../pages/pageNotFound/pageNotFound';

import PrivateRoute from '../privateRoute/PrivateRoute';
import PublicRoute from '../publicRoute/PublicRoute';

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

  // const isLogged = !!currentUser.id;

  return (
    <HashRouter>
      <Header />
      <LoaderContainer>
        <Loader loaded={!loading} />
      </LoaderContainer>
      <Container>
        <Spacer />
        <Switch>
          <Route exact path="/" component={Articles} />
          <Route exact path="/articles/:slug" component={Article} />
          <PrivateRoute exact path="/articles/:slug/edit" component={() => <h1>edit</h1>} />
          <PrivateRoute exact path="/add" component={AddForm} />
          <PublicRoute exact path="/login" component={LoginForm} />
          <PublicRoute exact path="/signup" component={SignupForm} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Container>
    </HashRouter>
  );
};

export default App;
