export const SET_TOKEN = "SET_TOKEN";
export const setTokenAction = (token) => {
    return {
        type: SET_TOKEN,
        payload: token
    };
};
