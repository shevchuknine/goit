import {
    ADD_TO_CHECKED,
    CHANGE_CHECKED,
    CHANGE_FILTER,
    CHANGE_FILTER2,
    CHANGE_SORTING, CHANGE_VALUE,
    REMOVE_FROM_CHECKED,
    SET_PHONES
} from "./action";

const initialStore = {
    phones: [
        {id: "1", deviceName: "Samsung 1", price: 100, filter: "samsung"},
        {id: "2", deviceName: "Samsung 2", price: 200, filter: "samsung"},
        {id: "3", deviceName: "Samsung 3", price: 300, filter: "samsung"},
        {id: "4", deviceName: "HTC 1", price: 110, filter: "htc"},
        {id: "5", deviceName: "HTC 2", price: 210, filter: "htc"},
        {id: "6", deviceName: "HTC 3", price: 310, filter: "htc"},
        {id: "7", deviceName: "Apple 1", price: 112, filter: "apple"},
        {id: "8", deviceName: "Apple 2", price: 212, filter: "apple"},
        {id: "9", deviceName: "Apple 3", price: 312, filter: "apple"},
    ],
    sorting: 0
};

export const reducer = (store = initialStore, action) => {
    const {type, payload} = action;

    if (type === CHANGE_FILTER) {
        const {filter} = payload;
        return {
            ...store,
            filter
        };
    } else if (type === CHANGE_SORTING) {
        const {sorting} = payload;
        return {
            ...store,
            sorting
        };
    } else if (type === CHANGE_VALUE) {
        const {value} = payload;
        return {
            ...store,
            value
        };
    }

    return store;
};
