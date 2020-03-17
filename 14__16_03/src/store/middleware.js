import {CHANGE_CHECKED, SET_PHONES, CHANGE_FILTER, setPhonesAction} from "./action";

const actionsToLog = [SET_PHONES, CHANGE_CHECKED];

export const logger = function (storeObject) {
    return function (next) {
        return function (action) {
            const {type} = action;

            if (actionsToLog.includes(type)) {
                console.log(action);
            } else {
                console.log("action ignored");
            }

            return next(action);
        }
    }
};

export const payloadMware = function (storeObject) {
    return function (next) {
        return function (action) {
            const {type, ...otherParams} = action;

            const newAction = {
                type,
                payload: otherParams
            };

            // console.log(action, newAction);

            return next(newAction)
        }
    }
};

export const asyncMware = (store) => (next) => (action) => {
    //
    const {type} = action;

    if (type === CHANGE_FILTER) {
        const {payload: {filter}} = action;

        fetch(filter).then(phones => {
            store.dispatch(setPhonesAction(phones))
        })
    }

    return next(action);
};
