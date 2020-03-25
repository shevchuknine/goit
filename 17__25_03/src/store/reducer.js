import {SET_TOKEN} from "./action";

const initialStore = {};

export const reducer = (store = initialStore, action) => {
    const {type, payload} = action;

    if (type === SET_TOKEN) {
        return {
            ...store,
            token: payload
        };
    }

    return store;
};
