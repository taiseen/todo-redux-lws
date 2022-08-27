import { loadFromServer } from '../actionCreator';
import { baseURL } from './baseURL';

// it is a thunk function, 
// which call action dispatcher
// & this thank function call from UI
const thunkFetchAllTodo = async (dispatch) => {

    const url = `${baseURL}/todos`;

    try {

        const res = await fetch(url);
        const todos = await res.json();

        // action creator call here
        dispatch(loadFromServer(todos));

    } catch (error) {
        console.log(error);
    }
}

export default thunkFetchAllTodo;