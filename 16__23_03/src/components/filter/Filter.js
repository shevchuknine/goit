import React, {Component} from "react";

import styles from "./filter.module.scss";
import {changeFilterAction} from "../../store/action";
import {connect} from "react-redux";
import {selectFilter} from "../../store/selectors";

const FilterItem = (props) => {
    const {name, active, onClick} = props;
    return <li className={`${styles.item} ${active ? styles.active : ""}`}
               onClick={onClick}>{name}</li>
};

class Filter extends Component {
    componentDidMount() {
        this.props.changeFilter("samsung");
    }

    render() {
        const {filter, changeFilter} = this.props;

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
    }
}

const mSTP = state => {
    return {
        filter: selectFilter(state)
    };
};

const mDTP = dispatch => {
    return {
        changeFilter: (filter) => dispatch(changeFilterAction(filter))
    };
};

export default connect(mSTP, mDTP)(Filter);
