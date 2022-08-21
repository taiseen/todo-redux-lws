import { STATUS_CHANGED, COLOR_CHANGED } from './actionTypes';


export const colorChange = (color, changeType) => {
    return {
        type: COLOR_CHANGED,
        payload: {
            color,
            changeType
        },
    }
}

export const statusChange = status => {
    return {
        type: STATUS_CHANGED,
        payload: status,
    }
}
