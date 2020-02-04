import React from "react";
import authFetch from "./helpes/fetch";
import {getPhones} from "./api";
import Store from "./components/store/Store";
import Cart from "./components/cart/Cart";

import styles from "./Root.module.scss";
import "./index.css";


class Root extends React.Component {
    state = {
        isLoading: false,

        phones: [],
        checkedPhones: [],
        filter: "samsung"
    };

    getData = () => {
        this.setState(ps => ({
            isLoading: true
        }), () => {
            const {filter} = this.state;
            getPhones(filter)
                .then((phones) => {
                    this.setState(ps => ({
                        phones
                    }));
                })
                .catch(() => {
                    this.setState(ps => ({
                        phones: []
                    }));

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
        if (prevState.filter !== this.state.filter) {
            this.getData();
        }
    }

    onChangeFilter = (filter) => {
        this.setState(ps => ({
            filter
        }))
    };

    onChangeCheckedPhones = (checked) => {
        const {checkedPhones} = this.state;

        const alreadyExist = checkedPhones.find(phone => phone.DeviceName === checked.DeviceName) !== undefined;

        this.setState(ps => ({
            checkedPhones: alreadyExist ?
                ps.checkedPhones.filter(item => item.DeviceName !== checked.DeviceName) :
                ps.checkedPhones.concat(checked)
        }))
    };

    render() {
        const {phones, checkedPhones, filter, isLoading} = this.state;
        return (
            <div className={styles.wrapper}>
                <Store phones={phones}
                       checkedPhones={checkedPhones}
                       filter={filter}
                       onChangeFilter={this.onChangeFilter}
                       onChangeCheckedPhones={this.onChangeCheckedPhones}
                       isLoading={isLoading}
                />
                <Cart checkedPhones={checkedPhones}
                      onChangeCheckedPhones={this.onChangeCheckedPhones}
                />
            </div>
        );
    }
}

export default Root;
