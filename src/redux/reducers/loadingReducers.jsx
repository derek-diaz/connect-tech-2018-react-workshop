function loading(state = { loading: false }, action) {
    switch (action.type) {
        case action.REQUEST_PUPPIES:
            return { ...state, loading: true };
        case action.RECEIVE_PUPPIES:
            return { ...state, loading: false };
        default:
            return state
    }
}

export default loading