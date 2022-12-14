import { STATUS_CHANGED, COLOR_CHANGED, COLOR_ADDED, COLOR_REMOVED } from './actionTypes';


const initialState = {
    status: 'All',
    colors: []
}


// ๐จ๐จ๐จ๐จ๐จ๐จ๐จ๐จ๐จ๐จ๐จ๐จ๐จ๐จ๐จ๐จ๐จ๐จ
// this reducer() function called by Redux,
// when user dispatch an action creators from UI
// ๐จ๐จ๐จ๐จ๐จ๐จ๐จ๐จ๐จ๐จ๐จ๐จ๐จ๐จ๐จ๐จ๐จ๐จ


const reducer = (state = initialState, { type, payload }) => {

    switch (type) {

        // ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ

        case STATUS_CHANGED:
            return {
                ...state, status: payload
            };

        // ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ

        case COLOR_CHANGED:

            const { color, changeType } = payload;

            // เฆเฆ เฆธเฆพเฆฅเง เงจ เฆเฆพ เฆเฆพเฆ เฆเฆฐเฆพ เฆนเฆเงเฆเง... 

            switch (changeType) {

                // ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ

                case COLOR_ADDED: // add new item into [array]
                    return {
                        ...state,
                        colors: [...state.colors, color],
                    };

                // ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ

                case COLOR_REMOVED: // remove selected item from [array]
                    return {
                        ...state,
                        colors: state.colors.filter(existingColor => existingColor !== color),
                    };

                // ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ๐ซ

                default:
                    return state;
            }

        // ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ๐ฉ

        default:
            return state;
    }
}

export default reducer;