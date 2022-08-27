import { colorSelected } from '../actionCreator';
import { baseURL } from './baseURL';

// it is a thunk function, 
// which call action dispatcher
// & this thank function call from UI
const thunkUpdateColor = (todoId, color) => {

    // redux thank call this ==> return anonymous function...
    return async (dispatch) => {

        const PATCH_METHOD = {
            method: 'PATCH',
            body: JSON.stringify({
                color: color,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }

        const url = `${baseURL}/todos/${todoId}`;

        try {

            const res = await fetch(url, PATCH_METHOD);
            const updatedTodo = await res.json();

            // action creator call here
            dispatch(colorSelected(updatedTodo.id, updatedTodo.color));

        } catch (error) {
            console.log(error);
        }
    }
}

export default thunkUpdateColor;