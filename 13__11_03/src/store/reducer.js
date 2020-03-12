import {ADD_TO_CHECKED, CHANGE_CHECKED, CHANGE_FILTER, REMOVE_FROM_CHECKED, SET_PHONES} from "./action";

const initialStore = {
    phones: [],
    checkedPhones: []
};

export const reducer = (store = initialStore, action) => {
    const {type, payload} = action;

    if (type === SET_PHONES) {
        const {phones} = payload;
        return {
            ...store,
            phones
        };
    } else if (type === CHANGE_CHECKED) {
        const {id} = payload;
        const isExist = store.checkedPhones.find(checkedPhonesId => {
            return checkedPhonesId === id
        }) !== undefined;

        return {
            ...store,
            checkedPhones: isExist ?
                store.checkedPhones.filter(checkedPhonesId => checkedPhonesId !== id):
                store.checkedPhones.concat(id)
        };
    }

    return store;
};
