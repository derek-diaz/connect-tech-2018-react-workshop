// Set constants for action types
export const actions = {
    UPDATE_FILTER: 'UPDATE_FILTER'
};


export function updateFilter(filter) {
    return { type: actions.UPDATE_FILTER, data: filter }
}