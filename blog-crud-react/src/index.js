import React from 'react';
import ReactDOM from 'react-dom';
import promise from "redux-promise";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, browserHistory, } from "react-router-dom";

import App from './components/app';;
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector('.container')
);
