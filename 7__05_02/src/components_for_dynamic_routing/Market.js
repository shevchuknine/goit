import React, {Component} from "react";
import {Route} from "react-router-dom";

class Market extends Component {
    render() {
        // console.log(this.props);
        const {match: {path}} = this.props;
        return (
            <div>
                Page: market
                <Route path={`${path}/:id`} component={Test}/>
            </div>
        );
    }
}

const Test = (props) => {
    // console.log(props);
    const {match: {path, url, params: {id}}} = props;
    console.log(`${path}/help`, `${url}/help`);
    return (
        <div>
            <div>{path} - {url}</div>
            <div>{id}</div>
            <Route path={`${path}/help`} component={Help}/>
        </div>
    );
};

const Help = (props) => {
    const {match: {params}} = props;
    console.log(params);
    return <div>help</div>
};

export default Market;
