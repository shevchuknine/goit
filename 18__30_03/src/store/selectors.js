import {createSelector} from "reselect";

export const selectPhones = (state) => state.phones;

export const selectFilter = (state, props) => state.filters[props.filterId];

export const selectFilteredPhones = createSelector([selectPhones, selectFilter], (phones, filter) => {
    return phones.filter(phone => phone.filter === filter);
});

