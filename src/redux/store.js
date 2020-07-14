import {applyMiddleware, combineReducers, createStore} from "redux";
import itemsReducer from "./itemsReducers";
import thunk from "redux-thunk";

const reducers = combineReducers({
content: itemsReducer
});
let store = createStore(reducers, applyMiddleware(thunk));
export default store;