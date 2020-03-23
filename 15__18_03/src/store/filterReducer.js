import {CHANGE_CHECKED, CHANGE_FILTER, SET_PHONES} from "./action";

const initialStore = {
    filter: "samsung"
};

export const filterReducer = (store = initialStore, action) => {
    const {type, payload} = action;
    if (type === CHANGE_FILTER) {
        const {filter} = payload;
        return {
            ...store,
            filter
        };
    }

    return store;
};
