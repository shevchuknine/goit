import React, {Component} from "react";

import Button from "./Button";

class Page extends Component {
    render() {
        return (
            <div>
                <Button label={"1"}/>
                <Button label={"2"}/>
                <Button label={"3"}/>
            </div>
        );
    }
}

export default Page;
