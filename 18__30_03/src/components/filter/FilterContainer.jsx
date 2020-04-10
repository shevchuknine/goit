import React, {Component} from "react";
import styles from "./filter.module.scss";
import {selectFilter} from "../../store/selectors";
import {changeFilterAction} from "../../store/action";
import {connect, connectAdvanced} from "react-redux";
import FilterComponent from "./FilterComponent";

class FilterContainer extends Component {
    changeFilter = (filter) => () => this.props.changeFilter(filter);

    componentDidMount() {
        this.props.changeFilter("samsung");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.props.changeFilter !== prevProps.changeFilter);
    }

    render() {
        const {filter} = this.props;

        return <FilterComponent filter={filter}
                                changeFilter={this.changeFilter}
        />;
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

function selectorFactory(dispatch) {
    return (nextState, nextOwnProps) => {

        return {
            filter: selectFilter(nextState, nextOwnProps),
            changeFilter: (filter) => dispatch(changeFilterAction(nextOwnProps.filterId, filter))
        };
    }
}

export default connectAdvanced(selectorFactory, {getDisplayName: () => "Hello"})(FilterContainer);
