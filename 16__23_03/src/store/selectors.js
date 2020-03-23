import {createSelector} from "reselect";

export const selectInputValue = (state) => state.value;

export const selectPhones = (state) => state.phones;

export const selectFilter = (state) => state.filter;

export const selectSorting = (state) => state.sorting;

export const selectFilteredPhones = createSelector([selectPhones, selectFilter], (phones, filter) => {
    return phones.filter(phone => phone.filter === filter);
});

export const selectFilteredSortedPhones = createSelector([selectFilteredPhones, selectSorting], (filteredPhones, sorting) => {
    if (sorting === 0) {
        return filteredPhones;
    } else {
        return [filteredPhones[sorting - 1]];
    }
});

