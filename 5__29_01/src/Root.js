import React from "react";

import App from "./App";

class Root extends React.Component {
    componentDidMount() {
        // setInterval(() => {
        //     this.forceUpdate();
        // }, 1000);
    }

    render() {
        return (
            <App/>
        );
    }
}

export default Root;
