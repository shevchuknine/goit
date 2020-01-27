import React from "react";

class Button extends React.PureComponent {
    render() {
        const {text, onClick} = this.props;

        console.log("render Button");

        return (
            <div className={"button"} onClick={onClick}>
                {text}
            </div>
        );
    }
}

// function Button(props) {
//
// }

export default Button;
