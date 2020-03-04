import React, {Component} from "react";

import styles from "./Store.module.scss";

import List from "../list/List";
import Filter from "../filter/Filter";
import {connect} from "react-redux";
import {changeCheckedAction, changeFilterAction} from "../../store/action";

class Store extends Component {
    onChangeCheckedPhones = (checkedDevice) => {
        const {changeChecked} = this.props;

        changeChecked(checkedDevice.id);
    };

    render() {
        const {phones, filter, changeFilter,
            checkedPhones, isLoading} = this.props;
        return (
            <div className={styles.wrapper}>
                <Filter filter={filter}
                        onChangeFilter={changeFilter}
                />
                {
                    isLoading ? "Please, wait" : (
                        <List phones={phones}
                              onClick={this.onChangeCheckedPhones}
                              checkedPhones={checkedPhones}
                        />
                    )
                }
            </div>
        );
    }
}

const mSTP = (state) => {
    return {
        filter: state.filter,
        phones: state.phones,
        checkedPhones: state.checkedPhones
    };
};

const mDTP = (dispatch) => {
    return {
        changeFilter: (filter) => dispatch(changeFilterAction(filter)),
        changeChecked: (id) => dispatch(changeCheckedAction(id))
    };
};

export default connect(mSTP, mDTP)(Store);
