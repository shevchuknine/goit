import React, {Component} from "react";
import {connect} from "react-redux";

import styles from "./Store.module.scss";

import List from "../list/List";
import Filter from "../filter/Filter";
import Sorting from "../sorting/Sorting";
import {selectInputValue} from "../../store/selectors";
import {onChangeAction} from "../../store/action";

class Store extends Component {
    onChange = (event) => {
        const {target: {value}} = event;

        this.props.onChange(value);
    };

    render() {
        const {value} = this.props;
        return (
            <div className={styles.wrapper}>
                <Sorting/>
                <Filter/>
                <List/>
                <input value={value} onChange={this.onChange}/>
            </div>
        );
    }
}

const mSTP = state => ({
    value: selectInputValue(state)
})

const mDTP = dispatch => {
    return {
        onChange: (value) => dispatch(onChangeAction(value))
    };
};

export default connect(mSTP, mDTP)(Store);
