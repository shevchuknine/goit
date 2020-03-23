export const CHANGE_FILTER = "CHANGE_FILTER";
export const changeFilterAction = (filter) => {
    return {
        type: CHANGE_FILTER,
        payload: {
            filter
        }
    };
};

export const CHANGE_SORTING = "CHANGE_SORTING";
export const changeSortingAction = (sorting) => {
    return {
        type: CHANGE_SORTING,
        payload: {
            sorting
        }
    };
};

export const CHANGE_VALUE = "CHANGE_VALUE";
export const onChangeAction = (value) => {
    return {
        type: CHANGE_VALUE,
        payload: {
            value
        }
    };
};
