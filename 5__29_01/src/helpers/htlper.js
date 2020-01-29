export const runWithTimeout = (func) => {
    setTimeout(func, 2000);
};

export const shallowEqual = (a, b) => {
    return Object.entries(a).reduce((res, item) => {
        const [key, value] = item;

        if (res === false) {
            return false;
        } else {
            return value === b[key];
        }

        // идентичная проверка
        // return res && value === b[key];
    }, true);
};
