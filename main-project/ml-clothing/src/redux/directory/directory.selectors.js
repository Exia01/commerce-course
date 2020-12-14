import { createSelector } from 'reselect';


const selectDirectory = state => state.directory

export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
)


// More info on selectors:https://medium.com/@matthew.holman/what-is-a-redux-selector-a517acee1fe8