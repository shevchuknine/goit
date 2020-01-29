import React from "react";

class MemoryLeakExample extends React.Component {
    state = {
        childIsVisible: true
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState(ps => ({
                childIsVisible: false
            }))
        }, 2000);
    }

    render() {
        const {childIsVisible} = this.state;
        console.log("MemoryLeakExample childIsVisible", childIsVisible)
        return (
            <div>
                {childIsVisible ? <Child/> : "nothing"}
            </div>
        );
    }
}


class Child extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };

        this.mounted = false;
    }


    componentDidMount() {
        this.mounted = true;
        console.log("Child mounted");

        setTimeout(() => {
            if (this.mounted) {
                this.setState(ps => ({
                    data: [1,2,3]
                }))
            }
        }, 4000);
    }

    componentWillUnmount() {
        this.mounted = false;
        console.log("Child unmounted");
    }

    render() {
        return "hello world";
    }
}

export default MemoryLeakExample;
