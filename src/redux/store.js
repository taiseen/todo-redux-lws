import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './rootReducer';
import thunkMiddleware from "redux-thunk";


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

// thunkMiddleware ==> যখনি কোন thank function পাবে,
// তখন ওই thank function এর ভিতরে থাকা action dispatch কে আটকে দিবে, 
// async কাজ করে বা server থেকে data নিয়ে এনে...
// তারপর action dispatch এ data ঢুকিয়ে, 
// action dispatch function কে call করে দিবে।

export default store;