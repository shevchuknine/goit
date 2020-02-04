import authFetch from "./helpes/fetch";

export const getPhones = (filter) => {
    return authFetch(
        `https://fonoapi.freshpixl.com/v1/getlatest?brand=${filter}&limit=10`).then(res => {
        return res.json();
    }).then(phones => {
        return phones.map(phone => ({
            ...phone,
            price: Math.floor(Math.random() * 1000)
        }))
    });
};
