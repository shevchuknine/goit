import React from "react";

import styles from "./filter.module.scss";

const FilterItem = (props) => {
    const {name, active, onClick} = props;
    return <li className={`${styles.item} ${active ? styles.active : ""}`}
               onClick={onClick}>{name}</li>
};

const Filter = (props) => {
    const {filter, onChangeFilter} = props;

    return (
        <ul className={styles.wrapper}>
            <FilterItem name={"Samsung"}
                        active={filter === "samsung"}
                        onClick={() => onChangeFilter("samsung")}
            />
            <FilterItem name={"Apple"}
                        active={filter === "apple"}
                        onClick={() => onChangeFilter("apple")}
            />
            <FilterItem name={"HTC"}
                        active={filter === "htc"}
                        onClick={() => onChangeFilter("htc")}
            />
        </ul>
    );
};

export default Filter;
