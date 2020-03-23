export const CHANGE_FILTER = "a";
export const changeFilterAction = (filter) => {
    return {
        type: CHANGE_FILTER,
        payload: {
            filter
        }
    };
};

export const SET_PHONES = "SET_PHONESkjgasfjhgakjhfg";

export const setPhonesAction = (phones) => {
    return {
        type: SET_PHONES,
        payload: {
            phones
        }
    };
};

export const CHANGE_CHECKED = "c";

export const changeCheckedAction = (id) => {
    return {
        type: CHANGE_CHECKED,
        payload: {
            id
        }
    };
};
//
// export const ADD = "ADD";
// export const addAction = () => {
//     return {
//         type: ADD
//     };
// };
//
// export const MINUS = "LKJHASDFLKJHGASDJFHAF";
// export const minusAction = () => {
//     return {
//         type: MINUS
//     };
// };
//
// const initialState = {
//     value: 0
// };
//
// const reducer = (state = {value: initialState}, actionObject) => {
//     if (actionObject.type === ADD) {
//         return {
//             ...state,
//             value: state.value + 1
//         };
//     } else if (actionObject.type === MINUS) {
//         return {
//             ...state,
//             value: state.value - 1
//         };
//     }
//
//     return state;
// };
