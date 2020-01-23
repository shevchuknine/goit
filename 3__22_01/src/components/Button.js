import React from "react";

function Button(props) {
    const {text, onClick} = props;


    return (
        <div className={"button"} onClick={onClick}>
            {text}
        </div>
    );
}

export default Button;
