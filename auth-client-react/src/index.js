import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import './index.css'

import reducers from './reducers'

import App from './components/App'
import SignIn from './components/auth/SignIn';
import SignOut from './components/auth/SignOut';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStoreWithMiddleware(reducers)

ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter >
            <Route exact path='/' component={App} >
                <Route exact path='/signin' component={SignIn} />
                <Route exact path='/signout' component={SignOut} />
            </Route>
        </BrowserRouter >
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
