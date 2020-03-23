import React from "react";
import Store from "./components/store/Store";

import styles from "./Root.module.scss";
import "./index.css";


class Root extends React.Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <Store/>
            </div>
        );
    }
}

export default Root;
