import React, {Component} from "react";
import {connect} from "react-redux";

import styles from "./Store.module.scss";

import List from "../list/List";
import {selectInputValue} from "../../store/selectors";
import {onChangeAction} from "../../store/action";
import Filter from "../filter/Filter";

class Store extends Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <div>
                    <Filter filterId={"main"}/>
                    <List filterId={"main"}/>
                </div>
                <div>
                    <Filter filterId={"additional"}/>
                    <List filterId={"additional"}/>
                </div>
            </div>
        );
    }
}

export default Store;
