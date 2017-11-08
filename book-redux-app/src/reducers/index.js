import { combineReducers } from 'redux';
import BooksReducer from './books';


const rootReducer = combineReducers({
  books: BooksReducer
  // state: (state = {}) => state
});

export default rootReducer;
