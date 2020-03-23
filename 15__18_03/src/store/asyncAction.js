import {getByFilter} from "../api";

// export const changeFilterAsyncAction = (filter) => {
//     return (dispatch) => {
//         getByFilter(filter).then(phones => {
//             dispatch(setPhonesAction(phones));
//         });
//
//         dispatch(changeFilterAction(filter));
//     };
// };

//////

export const CHANGE_FILTER_ACTION = "CHANGE_FILTER_ACTION";
export const changeFilterAction = (filter) => {
    return {
        type: CHANGE_FILTER_ACTION,
        payload: {
            filter
        }
    };
};

export const LOADING_PHONES_ACTION = "LOADING_PHONES_ACTION";
export const loadingPhonesAction = (loading) => {
    return {
        type: LOADING_PHONES_ACTION,
        payload: {
            loading
        }
    };
};

export const SET_PHONES = "SET_PHONES";
export const setPhonesAction = (phones) => {
    return {
        type: SET_PHONES,
        payload: {
            phones
        }
    };
};

export const changeFilterAsyncAction = (filter) => {
    return (dispatch) => {
        dispatch(changeFilterAction(filter));

        dispatch(loadingPhonesAction(true));

        getByFilter(filter).then((phones) => {
            dispatch(setPhonesAction(phones));
            dispatch(loadingPhonesAction(false));
        });
    };
};
