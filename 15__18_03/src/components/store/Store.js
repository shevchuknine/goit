import React, {Component} from "react";

import styles from "./Store.module.scss";

import List from "../list/List";
import Filter from "../filter/Filter";
import {connect} from "react-redux";

class Store extends Component {
    render() {
        const {isLoading} = this.props;
        return (
            <div className={styles.wrapper}>
                <Filter/>
                {
                    isLoading ? "Please, wait" : (
                        <List/>
                    )
                }
            </div>
        );
    }
}

const mSTP = (state) => {
    return {
        isLoading: state.phones.loading
    };
};

export default connect(mSTP)(Store);
