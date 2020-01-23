import React from "react";

function ListItem(props) {
    const {text, index, active, onClick} = props;

    return (
        <div className={"list-item"}>
            <span>{index}</span>)
            <span>{text}</span>|
            {
                active ? (
                    <span onClick={onClick}>+</span>
                ) : undefined
            }
        </div>
    );
}

export default ListItem;
