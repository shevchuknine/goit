import React from "react";
import authFetch from "./helpes/fetch";
import {getByFilter, getPhones} from "./api";
import Store from "./components/store/Store";
import Cart from "./components/cart/Cart";
import {connect} from "react-redux";

import styles from "./Root.module.scss";
import "./index.css";
import {setPhonesAction} from "./store/action";



class Root extends React.Component {
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
                <Store isLoading={isLoading}/>
                <Cart/>
            </div>
        );
    }
}

const mapStoreToProps = (store) => {
    return {
        filter: store.filter
    };
};

const mDTP = (dispatch) => {
    return {
        setPhones: (phones) => dispatch(setPhonesAction(phones))
    };
};

export default connect(mapStoreToProps, mDTP)(Root);
