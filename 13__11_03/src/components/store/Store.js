import React, {Component} from "react";

import styles from "./Store.module.scss";

import List from "../list/List";
import Filter from "../filter/Filter";
import {connect} from "react-redux";
import {changeCheckedAction, changeFilterAction, setPhonesAction} from "../../store/action";
import {getByFilter} from "../../api";

class Store extends Component {
    state = {
        isLoading: false
    };

    getData = () => {
        const {setPhones} = this.props;

        this.setState(ps => ({
            isLoading: true
        }), () => {
            const {filter} = this.props;
            getByFilter(filter)
                .then((phones) => {
                    setPhones(phones)
                })
                .catch(() => {
                    setPhones([]);

                    alert("Sorry, bad request!")
                })
                .finally(() => this.setState(ps => ({
                    isLoading: false
                })))
        })
    };

    componentDidMount() {
        this.getData();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.filter !== this.props.filter) {
            this.getData();
        }
    }

    render() {
        const {isLoading} = this.state;
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
        filter: state.filterData.filter
    };
};

const mDTP = (dispatch) => {
    return {
        setPhones: (phones) => dispatch(setPhonesAction(phones))
    };
};

export default connect(mSTP, mDTP)(Store);
