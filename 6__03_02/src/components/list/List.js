import React from "react";

const List = (props) => {
    const {phones, checkedPhones, onClick} = props;
    return (
        <ul>
            {
                phones.map((phone, index) => (
                    <li key={index}>
                        <div>Name: {phone.DeviceName}</div>
                        <div>Price: {phone.price}</div>
                        <button onClick={() => onClick(phone)}>
                            {checkedPhones.find(ch => ch.DeviceName === phone.DeviceName)
                                ? "Удалить" : "Добавить"}
                        </button>
                    </li>
                ))
            }
        </ul>
    );
};

export default List;
