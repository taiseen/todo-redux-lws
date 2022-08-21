import { STATUS_CHANGED, COLOR_CHANGED } from './actionTypes';
import initialState from './initialState';


const reducer = (state = initialState, { type, payload }) => {

    switch (type) {

        // 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

        case STATUS_CHANGED:
            return {
                ...state, status: payload
            };

        // 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

        case COLOR_CHANGED:
            const { color, changeType } = payload;

            if (changeType === 'added') {
                return {
                    ...state,
                    colors: [...state.colors, color],
                };
            } else {
                return {
                    ...state,
                    colors: state.colors.filter(existingColor => existingColor !== color),
                };
            }

        // 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

        default:
            return state;
    }
}

export default reducer;