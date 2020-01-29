import React from "react";

class ListItem extends React.PureComponent {
    state = {
        test: "unknown"
    };

    remove = () => {
        const {id, remove} = this.props;

        remove(id);
    };

    static getDerivedStateFromProps(props, state) {
        return {
            ...state,
            test: props.id
        };
    }

    render() {
        const {id, text, active, remove} = this.props;

        // console.log("render ListItem");

        return (
            <div className={"list-item"}>
                <span>{text}</span>|
                {
                    active ? (
                        <span onClick={this.remove}>+</span>
                    ) : undefined
                }
            </div>
        );
    }
}
//
// function ListItem(props) {
//
// }

export default ListItem;
