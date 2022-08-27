import { toggle } from '../actionCreator';
import { baseURL } from './baseURL';

// it is a thunk function, 
// which call action dispatcher
// & this thank function call from UI
const thunkUpdateStats = (todoId, currentStatus) => {

    // redux thank call this ==> return anonymous function...
    return async (dispatch) => {

        const PATCH_METHOD = {
            method: 'PATCH',
            body: JSON.stringify({
                completed: !currentStatus,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }

        const url = `${baseURL}/todos/${todoId}`;

        try {

            const res = await fetch(url, PATCH_METHOD);
            const newTodo = await res.json();

            // action creator call here
            dispatch(toggle(newTodo.id));

        } catch (error) {
            console.log(error);
        }
    }
}

export default thunkUpdateStats;