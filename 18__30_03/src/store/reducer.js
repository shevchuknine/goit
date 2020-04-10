import {CHANGE_FILTER} from "./action";

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
    filters: {}
};

export const reducer = (store = initialStore, action) => {
    const {type, payload} = action;

    if (type === CHANGE_FILTER) {
        const {id, filter} = payload;

        return {
            ...store,
            filters: {
                ...(store.filters || {}),
                [id]: filter
            }
        };
    }

    return store;
};
