import React, {Component} from "react";
import {ThemeConsumer} from "./RootPage";

class Button extends Component {
    render() {
        const {label} = this.props;
        return (
            <ThemeConsumer>
                {
                    (context) => {
                        console.log(context);
                        return (
                            <button className={context}>
                                {label}
                            </button>
                        );
                    }
                }
            </ThemeConsumer>
        );
    }
}

export default Button;
