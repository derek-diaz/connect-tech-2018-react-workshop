import {actions} from '../actions/puppyActions'

function loading(state = { loading: false }, action) {
    switch (action.type) {
        case actions.REQUEST_PUPPIES:
            return { ...state, loading: true };
        case actions.RECEIVE_PUPPIES:
            return { ...state, loading: false };
        default:
            return state
    }
}

export default loading