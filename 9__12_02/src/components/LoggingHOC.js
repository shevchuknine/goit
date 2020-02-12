import React, {Component} from "react";

const LoggingHOC = (ComponentToWrap) => {
    class HOCClass extends Component {
        state = {
            theme: "light"
        };

        componentDidMount() {
            console.log("HOC props", this.props);
        }

        render() {
            return <ComponentToWrap {...this.props} theme={this.state.theme}/>;
        }
    }

    return HOCClass;
};

export default LoggingHOC;
