import { addTodo } from '../actionCreator';
import { baseURL } from './baseURL';

// it is a thunk function, 
// which call action dispatcher
// & this thank function call from UI
const thunkAddTodo = newTodoAdd => {

    // redux thank call this ==> return anonymous function...
    return async (dispatch) => {

        const POST_METHOD = {
            method: 'POST',
            body: JSON.stringify({
                text: newTodoAdd,
                completed: false,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }

        const url = `${baseURL}/todos`;

        try {

            const res = await fetch(url, POST_METHOD);
            const newTodo = await res.json();

            // action creator call here
            dispatch(addTodo(newTodo.text));

        } catch (error) {
            console.log(error);
        }
    }
}

export default thunkAddTodo;