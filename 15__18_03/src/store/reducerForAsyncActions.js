import {CHANGE_FILTER_ACTION, LOADING_PHONES_ACTION, SET_PHONES} from "./asyncAction";

const initialState = {
    phones: {
        data: [],
        loading: false
    }
};

export const reducerForAsyncActions = (state = initialState, action) => {
    const {type, payload} = action;
    if (type === LOADING_PHONES_ACTION) {
        const {loading} = payload;
        return {
            ...state,
            phones: {
                ...state.phones,
                loading
            }
        };
    } else if (type === SET_PHONES) {
        const {phones} = payload;
        return {
            ...state,
            phones: {
                ...state.phones,
                data: phones
            }
        };
    } else if (type === CHANGE_FILTER_ACTION) {
        const {filter} = payload;
        return {
            ...state,
            filter
        };
    }

    return state;
};
