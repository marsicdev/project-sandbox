import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import PostsReducer from './posts-reducer'

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer,
  routing: routerReducer
});

export default rootReducer;
