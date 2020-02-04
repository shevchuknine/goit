import React, {Component} from "react";

import styles from "./Store.module.scss";

import List from "../list/List";
import Filter from "../filter/Filter";

class Store extends Component {
    render() {
        const {phones, filter, onChangeFilter, onChangeCheckedPhones,
            checkedPhones, isLoading} = this.props;
        return (
            <div className={styles.wrapper}>
                <Filter filter={filter}
                        onChangeFilter={onChangeFilter}
                />
                {
                    isLoading ? "Please, wait" : (
                        <List phones={phones}
                              onClick={onChangeCheckedPhones}
                              checkedPhones={checkedPhones}
                        />
                    )
                }
            </div>
        );
    }
}

export default Store;
