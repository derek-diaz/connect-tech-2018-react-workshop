function puppyReducers(state = [], action) {
    switch (action.type) {
        case 'CREATE_PUPPY':
            return {
                ...state,
                payload: action.data
            };
        default:
            return state
    }
}

export default puppyReducers