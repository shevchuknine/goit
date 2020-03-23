import React from "react";
import {connect} from "react-redux";
import {selectFilter, selectFilteredPhones, selectFilteredSortedPhones, selectPhones} from "../../store/selectors";

const List = (props) => {
    console.log("render of List component");
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

const mSTP = (state) => {
    // console.log("mSTP of List component");
    // const filter = selectFilter(state);
    //
    // return {
    //     phones: selectPhones(state).filter(phone => phone.filter === filter)
    // };

    // return {
    //     phones: selectFilteredPhones(state)
    // };

    return {
        phones: selectFilteredSortedPhones(state)
    };
};


export default connect(mSTP)(List);
