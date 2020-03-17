import React from "react";

import styles from "./filter.module.scss";
import {changeFilterAction} from "../../store/action";
import {connect} from "react-redux";

const FilterItem = (props) => {
    const {name, active, onClick} = props;
    return <li className={`${styles.item} ${active ? styles.active : ""}`}
               onClick={onClick}>{name}</li>
};

const Filter = (props) => {
    const {filter, changeFilter} = props;

    return (
        <ul className={styles.wrapper}>
            <FilterItem name={"Samsung"}
                        active={filter === "samsung"}
                        onClick={() => changeFilter("samsung")}
            />
            <FilterItem name={"Apple"}
                        active={filter === "apple"}
                        onClick={() => changeFilter("apple")}
            />
            <FilterItem name={"HTC"}
                        active={filter === "htc"}
                        onClick={() => changeFilter("htc")}
            />
        </ul>
    );
};

const mSTP = state => {
    return {
        filter: {
            ...state.filterData.filter,
            theme: "dark"
        }
    };
};

const mDTP = dispatch => {
    return {
        changeFilter: (filter) => dispatch(changeFilterAction(filter))
    };
};

export default connect(mSTP, mDTP)(Filter);
