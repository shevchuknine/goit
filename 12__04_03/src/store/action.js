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
