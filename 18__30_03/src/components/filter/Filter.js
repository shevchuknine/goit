import React, {Component} from "react";
import styles from "./filter.module.scss";
import {selectFilter} from "../../store/selectors";
import {changeFilterAction} from "../../store/action";
import {connect} from "react-redux";

const FilterItem = (props) => {
    const {name, active, onClick} = props;
    return <li className={`${styles.item} ${active ? styles.active : ""}`}
               onClick={onClick}>{name}</li>
};

class Filter extends Component {
    changeFilter = (filter) => () => this.props.changeFilter(filter);

    componentDidMount() {
        this.props.changeFilter("samsung");
    }

    render() {
        const {filter} = this.props;

        return (
            <ul className={styles.wrapper}>
                <FilterItem name={"Samsung"}
                            active={filter === "samsung"}
                            onClick={this.changeFilter("samsung")}
                />
                <FilterItem name={"Apple"}
                            active={filter === "apple"}
                            onClick={this.changeFilter("apple")}
                />
                <FilterItem name={"HTC"}
                            active={filter === "htc"}
                            onClick={this.changeFilter("htc")}
                />
            </ul>
        );
    }
}

const mSTP = (state, ownProps) => {
    return {
        filter: selectFilter(state, ownProps)
    };
};

const mDTP = (dispatch, ownProps) => {
    return {
        changeFilter: (filter) => dispatch(changeFilterAction(ownProps.filterId, filter))
    };
};

export default connect(mSTP, mDTP)(Filter);
