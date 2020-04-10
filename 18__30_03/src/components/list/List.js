import React from "react";
import {connect} from "react-redux";
import {selectFilter, selectFilteredPhones, selectFilteredSortedPhones, selectPhones} from "../../store/selectors";

const List = (props) => {
    console.log(`render of List component ${props.filterId}`);
    const {phones} = props;
    return (
        <ul>
            {
                phones.map((phone, index) => (
                    <li key={index}>
                        <div>Name: {phone.deviceName}</div>
                        <div>Price: {phone.price}</div>
                    </li>
                ))
            }
        </ul>
    );
};

const mSTP = (state, ownProps) => {
    return {
        phones: selectFilteredPhones(state, ownProps)
    };
};


export default connect(mSTP)(List);
