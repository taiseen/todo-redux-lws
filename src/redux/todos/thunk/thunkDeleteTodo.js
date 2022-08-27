import { deleteTodo } from '../actionCreator';
import { baseURL } from './baseURL';

// it is a thunk function, 
// which call action dispatcher
// & this thank function call from UI
const thunkDeleteTodo = todoId => {

    // redux thank call this ==> return anonymous function...
    return async (dispatch) => {

        const url = `${baseURL}/todos/${todoId}`;

        try {

            await fetch(url, { method: 'DELETE' });

            // action creator call here
            dispatch(deleteTodo(todoId));

        } catch (error) {
            console.log(error);
        }
    }
}

export default thunkDeleteTodo;