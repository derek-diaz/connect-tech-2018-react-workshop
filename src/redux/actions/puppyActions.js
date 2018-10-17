// Set constants for action types
export const actions = {
    CREATE_PUPPY: 'CREATE_PUPPY',
    ADOPT_PUPPY: 'ADOPT_PUPPY',
    UPDATE_PUPPY: 'UPDATE_PUPPY'
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

// Action creators for each action
function updatePuppy(id) {
    return {
        type: actions.UPDATE_PUPPY,
        data: id,
    }
}


export {adoptPuppy,createPuppy, updatePuppy}