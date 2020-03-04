import React, {Component} from "react";

import styles from "./Cart.module.scss";
import {changeCheckedAction} from "../../store/action";

import {connect} from "react-redux";

class Cart extends Component {
    // todo: checkedPhones by id

    render() {
        const {checkedPhones, changeChecked} = this.props;
        return (
            checkedPhones.length === 0 ? (
                "Cart is empty"
            ) : (
                <div className={styles.wrapper}>
                    <ul>
                        {
                            checkedPhones.map((checked, index) => {
                                return (
                                    <li key={index}>
                                        <div>Name: {checked.DeviceName}</div>
                                        <div>Price: {checked.price}</div>
                                        <div onClick={() => changeChecked(checked)}>X</div>
                                    </li>
                                );
                            })
                        }
                    </ul>
                    <h6>
                        Total price:
                        {
                            checkedPhones.reduce((res, item) => res + item.price, 0)
                        }
                    </h6>
                </div>
            )
        );
    }
}

const mSTP = (state) => {
    return {
        checkedPhones: state.checkedPhones
    };
};

const mDTP = (dispatch) => {
    return {
        changeChecked: (id) => dispatch(changeCheckedAction(id))
    };
};

export default connect(mSTP, mDTP)(Cart);
