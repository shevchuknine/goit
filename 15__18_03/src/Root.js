import React from "react";
import authFetch from "./helpes/fetch";
import {getByFilter, getPhones} from "./api";
import Store from "./components/store/Store";
import Cart from "./components/cart/Cart";
import {connect} from "react-redux";

import styles from "./Root.module.scss";
import "./index.css";
import {setPhonesAction} from "./store/action";


class Root extends React.Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <Store/>
                {/*<Cart/>*/}
            </div>
        );
    }
}

export default Root;
