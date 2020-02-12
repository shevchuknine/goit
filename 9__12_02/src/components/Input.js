import React, {Component} from "react";
import LoggingHOC from "./LoggingHOC";

class Input extends Component {
    componentDidMount() {
        console.log("input props", this.props);
    }

    render() {
        return (
            <div>
                input
            </div>
        );
    }
}

export default LoggingHOC(Input);
