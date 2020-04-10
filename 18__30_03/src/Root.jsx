import React from "react";
import Store from "./components/store/Store";

import styles from "./Root.module.scss";
import "./index.css";
import {Provider} from "react-redux";
import {compose, createStore} from "redux";
import {reducer} from "./store/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers()
);

class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className={styles.wrapper}>
                    <Store/>
                </div>
            </Provider>
        );
    }
}

export default Root;
