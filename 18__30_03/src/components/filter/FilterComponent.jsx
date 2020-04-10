import React, {Component} from "react";
import styles from "./filter.module.scss";

const FilterItem = (props) => {
    const {name, active, onClick} = props;
    return <li className={`${styles.item} ${active ? styles.active : ""}`}
               onClick={onClick}>{name}</li>
};

class FilterComponent extends Component {
    render() {
        const {filter, changeFilter} = this.props;

        return (
            <ul className={styles.wrapper}>
                <FilterItem name={"Samsung"}
                            active={filter === "samsung"}
                            onClick={changeFilter("samsung")}
                />
                <FilterItem name={"Apple"}
                            active={filter === "apple"}
                            onClick={changeFilter("apple")}
                />
                <FilterItem name={"HTC"}
                            active={filter === "htc"}
                            onClick={changeFilter("htc")}
                />
            </ul>
        );
    }
}

export default FilterComponent;
