import { combineReducers } from 'redux';
import currentPostValueReducer from './currentPostValueReducer';
import currentCommentValueReducer from './currentCommentValueReducer';

const rootReducer = combineReducers({
    post: currentPostValueReducer,
    comment: currentCommentValueReducer
});

export default rootReducer;