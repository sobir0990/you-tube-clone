import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';
import {authReducer} from "./reducers/auth.reducer";
import {homeVideosReducer} from "./reducers/videos.reducer";

const initialState = {
    name: 'name',
    age: '24'
};

const rootReduces = combineReducers({
    auth: authReducer,
    homeVideos: homeVideosReducer
});

const reducer = (initialState) => initialState;

const store = createStore(
    rootReduces,
    {},
    composeWithDevTools(applyMiddleware(thunk)));

export default store;