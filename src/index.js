import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

// eslint-disable-next-line no-unused-vars
import Data from './data/data';

import reducers from './reducers/reducers';

import 'antd/dist/antd.css';
import './index.scss';
import App from './components/app/App';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
