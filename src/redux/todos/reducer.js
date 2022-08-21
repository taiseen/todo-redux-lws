import { ADDED, TOGGLED, DELETED, COLOR_SELECTED, ALL_COMPLETED, CLEAR_COMPLETED } from './actionTypes';
import { initialState } from "./initialState";



const reducer = (state = initialState, { type, payload }) => {

    switch (type) {

        // 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

        case ADDED:
            return [
                ...state,
                {
                    id: state.length + 1,
                    text: payload,
                    completed: false,
                },
            ];

        // 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

        case TOGGLED:
            return state.map(todo => todo.id === payload
                ? { ...todo, completed: !todo.completed }
                : todo
            );

        // 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

        case DELETED:
            return state.filter(todo => todo.id !== payload);
        // je gula not equal hobe, sudhu se gual ber kore niya anbo

        // 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

        case COLOR_SELECTED:
            const { todoId, color } = payload;
            return state.map(todo => todo.id === todoId
                ? { ...todo, color: color }
                : todo
            );

        // 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

        case ALL_COMPLETED:
            return state.map(todo => ({ ...todo, completed: true }));

        // 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

        case CLEAR_COMPLETED:
            return state.filter(todo => !todo.completed);

        // 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
        default:
            return state;
    }
}

export default reducer;