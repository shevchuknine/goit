export const CHANGE_FILTER = "CHANGE_FILTER";
export const changeFilterAction = (id, filter) => {
    return {
        type: CHANGE_FILTER,
        payload: {id, filter}
    };
};
