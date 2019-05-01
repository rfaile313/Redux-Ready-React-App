//the purpose of the root reducer is to combine all the reducers

import { combineReducers } from 'redux';
import postReducer from './postReducer';

export default combineReducers({
    posts: postReducer
});