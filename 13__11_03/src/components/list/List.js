import React from "react";
import {changeCheckedAction, setPhonesAction} from "../../store/action";
import {connect} from "react-redux";

const List = (props) => {
    const {phones, checkedPhones, changeChecked} = props;
    return (
        <ul>
            {
                phones.map((phone, index) => (
                    <li key={index}>
                        <div>Name: {phone.DeviceName}</div>
                        <div>Price: {phone.price}</div>
                        <button onClick={() => changeChecked(phone.id)}>
                            {checkedPhones.find(id => id === phone.id)
                                ? "Удалить" : "Добавить"}
                        </button>
                    </li>
                ))
            }
        </ul>
    );
};

const mSTP = (state) => {
    return {
        phones: state.phonesData.phones,
        checkedPhones: state.phonesData.checkedPhones
    };
};

const mDTP = (dispatch) => {
    return {
        changeChecked: (id) => dispatch(changeCheckedAction(id))
    };
};

export default connect(mSTP, mDTP)(List);
