import React from "react";
import {connect} from "react-redux";
import {changeSortingAction} from "../../store/action";
import {selectSorting} from "../../store/selectors";

import styles from "./sorting.module.scss";

const SortingItem = (props) => {
    const {name, active, onClick} = props;
    return <li className={`${styles.item} ${active ? styles.active : ""}`}
               onClick={onClick}>{name}</li>
};

const Sorting = (props) => {
    const {sorting, changeSorting} = props;
    return (
        <div className={styles.wrapper}>
            <SortingItem name={"All"} active={sorting === 0} onClick={() => changeSorting(0)}/>
            <SortingItem name={"1"} active={sorting === 1} onClick={() => changeSorting(1)}/>
            <SortingItem name={"2"} active={sorting === 2} onClick={() => changeSorting(2)}/>
            <SortingItem name={"3"} active={sorting === 3} onClick={() => changeSorting(3)}/>
        </div>
    );
};

const mSTP = (state) => ({
    sorting: selectSorting(state)
});

const mDTP = (dispatch) => {
    return {
        changeSorting: (sorting) => dispatch(changeSortingAction(sorting))
    };
};

export default connect(mSTP, mDTP)(Sorting)
