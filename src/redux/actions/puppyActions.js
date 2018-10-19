// Set constants for action types
export const actions = {
    CREATE_PUPPY: 'CREATE_PUPPY',
    ADOPT_PUPPY: 'ADOPT_PUPPY',
    REQUEST_PUPPIES: 'REQUEST_PUPPIES',
    RECEIVE_PUPPIES: 'RECEIVE_PUPPIES'
};
export function createPuppy(data) {
    return { type: actions.CREATE_PUPPY, data }
}

export function adoptPuppy(id) {
    return { type: actions.ADOPT_PUPPY, data: id }
}

export function updateFilter(filter) {
    return { type: actions.UPDATE_FILTER, data: filter }
}

function requestPuppies() {
    return { type: actions.REQUEST_PUPPIES }
}

function receivePuppies(data) {
    return { type: actions.RECEIVE_PUPPIES, data }
}

export const fetchPuppies = () => (dispatch) => {
    dispatch(requestPuppies())

    // How to access contents of a Github file https://stackoverflow.com/a/14716043/5049215
    // https://s3-us-west-2.amazonaws.com/sia-generic-bucket/puppies.json
    const puppiesUrl = 'https://s3-us-west-2.amazonaws.com/sia-generic-bucket/puppies.json'

    fetch(puppiesUrl, { })
        .then(response => response.json())
        .then(json => {
            dispatch(receivePuppies(json))
        })
        .catch(err => {
            // TODO: dispatch an action to receive error which sets the error in state and sets isLoading to false
            const error = new Error(err)
            console.error(error);
            throw error
        })
}