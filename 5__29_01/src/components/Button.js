import React from "react";

class Button extends React.PureComponent {
    componentDidMount() {
        // setTimeout(() => {
        //
        //     // throw Error();
        // }, 3000)

        JSON.parse("{");
    }

    render() {
        const {text, onClick} = this.props;

        // console.log("render Button");

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
