export const CHANGE_FILTER = "CHANGE_FILTER";

export const changeFilterAction = (filter) => {
    return {
        type: CHANGE_FILTER,
        filter
    };
};

export const SET_PHONES = "SET_PHONES";

export const setPhonesAction = (phones) => {
    return {
        type: SET_PHONES,
        phones
    };
};

export const CHANGE_CHECKED = "CHANGE_CHECKED";

export const changeCheckedAction = (id) => {
    return {
        type: CHANGE_CHECKED,
        id
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
