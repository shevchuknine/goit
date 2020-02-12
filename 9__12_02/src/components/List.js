import React, {Component} from "react";
import LoggingHOC from "./LoggingHOC";

class List extends Component {
    componentDidMount() {
        console.log("list props", this.props);
    }

    render() {
        return (
            <div>
                input
            </div>
        );
    }
}

export default LoggingHOC(List);
