const token = "116c069a37e3f6ffc2ab3b130450a9d7acc1f1fc3c671fe7";

const authFetch = (url) => {
    return fetch(`${url}&token=${token}`)
};

export default authFetch;
