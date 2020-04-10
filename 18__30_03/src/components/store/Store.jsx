import React, {Component} from "react";
import {connect} from "react-redux";

import styles from "./Store.module.scss";

import List from "../list/List";
import FilterContainerWrapped from "../filter/FilterContainer";

class Store extends Component {
    changeFilter = () => {};

    render() {
        return (
            <div className={styles.wrapper}>
                <div>
                    <FilterContainerWrapped filterId={"main"}/>
                    <List filterId={"main"}/>
                </div>
                <div>
                    <FilterContainerWrapped filterId={"additional"}/>
                    <List filterId={"additional"}/>
                </div>
            </div>
        );
    }
}

export default Store;
