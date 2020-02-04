import React, {Component} from "react";

import styles from "./Cart.module.scss";

class Cart extends Component {
    render() {
        const {checkedPhones, onChangeCheckedPhones} = this.props;
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
                                        <div onClick={() => onChangeCheckedPhones(checked)}>X</div>
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

export default Cart;
