import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { postsReducers} from './reducers/postsReducers';

const reducer = combineReducers({
    postsList: postsReducers,


});

const initialState = {};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools
    (applyMiddleware(...middleware)));

export default store;