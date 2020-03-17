import {createReducer} from "@reduxjs/toolkit";
import {changeFilterAction} from "./action";

const initialStore = {
    filter: "samsung"
};

export const filterReducer = createReducer(initialStore, {
    [changeFilterAction.type]: (state, action) => {
        const {payload} = action;
        // state.filter = payload;

        return {
            ...state,
            filter: payload
        };
    }
});

// import {CHANGE_CHECKED, CHANGE_FILTER, SET_PHONES} from "./action";
//
//
//
// export const filterReducer = (store = initialStore, action) => {
//     const {type, payload} = action;
//     if (type === CHANGE_FILTER) {
//         const {filter} = payload;
//         return {
//             ...store,
//             filter
//         };
//     }
//
//     return store;
// };
