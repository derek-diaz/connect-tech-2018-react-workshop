import {actions} from '../actions/puppyActions'

function puppyReducers(state = [], action) {
    switch (action.type) {
        case actions.CREATE_PUPPY:
            return [
                ...state,
                action.data,
            ]
        case actions.ADOPT_PUPPY:
            return state.map(puppy => {
                if (puppy.id === action.data) {
                    return { ...puppy, available: false }
                }
                return puppy
            })
        case actions.RECEIVE_PUPPIES:
            return action.data
        default:
            return state
    }
}

export default puppyReducers