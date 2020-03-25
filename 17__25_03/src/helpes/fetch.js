import {v4} from "uuid";

const getFromLS = (key) => (JSON.parse(localStorage.getItem(key)) || []);
const setToLS = (key, data) => localStorage.setItem(key, JSON.stringify(data));

const fetch = (url, params) => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    }).then(() => {
        if (url === "/api/registration") {
            const {body: {login, password}} = params;

            const users = getFromLS("users");

            if (users.find(user => user.login === login) === undefined) {
                users.push({login, password});
                setToLS("users", users);

                return {success: true};
            } else {
                return {success: false, error: "User with current login already exist"};
            }
        } else if (url === "/api/signin") {
            const {body: {login, password}} = params;

            const users = getFromLS("users");
            const userWithThisLogin = users.find(user => user.login === login);
            const rightCreds = userWithThisLogin.password === password;

            if (rightCreds) {
                const authUsers = getFromLS("authUsers");
                const userByLogin = authUsers.find(user => user.login === login);
                const userAlreadyAuth = userByLogin !== undefined;

                if (userAlreadyAuth) {
                    return {success: true, result: {token: userByLogin.token}};
                } else {
                    const token = v4();
                    authUsers.push({login, token, live: 10});
                    setToLS("authUsers", authUsers);

                    return {success: true, result: {token}};
                }
            } else {
                return {success: false, error: "Incorrect login or password"};
            }
        } else if (url === "/api/signout") {
            const {body: {token}} = params;

            let authUsers = getFromLS("authUsers");
            authUsers = authUsers.filter(user => user.token !== token);
            setToLS("authUsers", authUsers);

            return {success: true};
        } else if (url === "/api/data") {
            const {headers: {token}} = params;

            const authUsers = getFromLS("authUsers");
            const userByToken = authUsers.find(user => user.token === token);
            const userIsAuth = userByToken !== undefined;

            if (userIsAuth) {
                return {success: true, result: {data: userByToken.login}};
            } else {
                return {success: false, error: "Authorization token expired"};
            }
        }
    })
};

export const runner = () => {
    setInterval(() => {
        let authUsers = getFromLS("authUsers");
        authUsers = authUsers.map(user => {
            return {
                ...user,
                live: user.live - 1
            };
        }).filter(user => user.live > 0);
        setToLS("authUsers", authUsers);
    }, 1000);
};

export default fetch;
