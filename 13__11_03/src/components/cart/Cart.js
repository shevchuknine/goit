import React, {Component} from "react";

import styles from "./Cart.module.scss";
import {changeCheckedAction} from "../../store/action";

import {connect} from "react-redux";
import {getByIds} from "../../api";

// логика по checkedPhones + загрузка checked
class Cart extends Component {
    state = {
        checkedPhonesFullInfo: [],
        isLoading: false
    };

    getCheckedPhonesData = () => {
        this.setState({isLoading: true}, () => {
            getByIds(this.props.checkedPhones).then(checkedPhonesFullInfo => {
                this.setState({checkedPhonesFullInfo, isLoading: false});
            });
        });
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.checkedPhones !== this.props.checkedPhones) {
            this.getCheckedPhonesData();
        }
    }

    render() {
        const {checkedPhonesFullInfo, isLoading} = this.state;
        const {checkedPhones, changeChecked} = this.props;

        if (isLoading) {
            return "Please, wait.";
        }

        return (
            checkedPhones.length === 0 ? (
                "Cart is empty"
            ) : (
                <div className={styles.wrapper}>
                    <ul>
                        {
                            checkedPhonesFullInfo.map((checked, index) => {
                                return (
                                    <li key={index}>
                                        <div>Name: {checked.DeviceName}</div>
                                        <div>Price: {checked.price}</div>
                                        <div onClick={() => changeChecked(checked.id)}>X</div>
                                    </li>
                                );
                            })
                        }
                    </ul>
                    <h6>
                        Total price:
                        {
                            checkedPhonesFullInfo.reduce((res, item) => res + item.price, 0)
                        }
                    </h6>
                </div>
            )
        );
    }
}

const mSTP = (state) => {
    return {
        checkedPhones: state.phonesData.checkedPhones
    };
};

const mDTP = (dispatch) => {
    return {
        changeChecked: (id) => dispatch(changeCheckedAction(id))
    };
};

export default connect(mSTP, mDTP)(Cart);
