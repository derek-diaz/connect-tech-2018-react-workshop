// Set constants for action types
export const actions = {
    CREATE_PUPPY: 'CREATE_PUPPY',
    ADOPT_PUPPY: 'ADOPT_PUPPY',
    REQUEST_PUPPIES: 'REQUEST_PUPPIES',
    RECEIVE_PUPPIES: 'RECEIVE_PUPPIES'
};

// Action creators for each action
function adoptPuppy(id) {
    return {
        type: actions.ADOPT_PUPPY,
        data: id,
    }
}

// Action creators for each action
function createPuppy(data) {
    return {
        type: actions.CREATE_PUPPY,
        data,
    }
}

function requestPuppies() {
    return { type: actions.REQUEST_PUPPIES }
}

function receivePuppies(data) {
    return {type: actions.RECEIVE_PUPPIES, data}
}

export const fetchPuppies = () => (dispatch) => {
    dispatch(requestPuppies());

    // How to access contents of a Github file https://stackoverflow.com/a/14716043/5049215
    const puppiesUrl = 'https://raw.githubusercontent.com/siakaramalegos/redux_puppies/8-async-action/src/puppies.jsons'
    const headers = new Headers();
    headers.append('Accept', 'application/vnd.github.3.raw');

    fetch(puppiesUrl, { headers })
        .then(response => response.json())
        .then(json => {
            dispatch(receivePuppies(json))
        })
        .catch(err => {
            // TODO: dispatch an action to receive error which sets the error in state and sets isLoading to false
            const error = new Error(err);
            console.error(error);
            throw error
        })
};

export {adoptPuppy,createPuppy, receivePuppies}