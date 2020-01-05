import { combineReducers } from 'redux'; // function for combining all recducer functions
import postReducer from  './postReducer';

export default combineReducers({
    posts: postReducer
})