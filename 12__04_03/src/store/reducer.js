import {ADD_TO_CHECKED, CHANGE_CHECKED, CHANGE_FILTER, REMOVE_FROM_CHECKED, SET_PHONES} from "./action";

const initialStore = {
    filter: "samsung",
    phones: [],
    checkedPhones: []
};

export const reducer = (store = initialStore, action) => {
    if (action.type === CHANGE_FILTER) {
        return {
            ...store,
            filter: action.filter
        };
    } else if (action.type === SET_PHONES) {
        return {
            ...store,
            phones: action.phones
        };
    } else if (action.type === CHANGE_CHECKED) {
        const isExist = store.checkedPhones.find(id => {
            return id === action.id
        }) !== undefined;

        return {
            ...store,
            checkedPhones: isExist ?
                store.checkedPhones.filter(id => id !== action.id):
                store.checkedPhones.concat(action.id)
        };
    }

    return store;
};
