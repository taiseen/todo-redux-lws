import { combineReducers } from 'redux';
import todoReducer from './todos/reducer';
import filtersReducer from './filters/reducer';


const rootReducer = combineReducers({
    todos: todoReducer,
    filter: filtersReducer
})


export default rootReducer;