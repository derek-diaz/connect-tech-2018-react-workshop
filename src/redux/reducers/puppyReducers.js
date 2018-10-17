import {actions} from '../actions/puppyActions'

function puppyReducers(state = [], action) {
    console.log("PUPPY ACTION:", action);
    console.log("PUPPY STATE:", state);

    switch (action.type) {
        case actions.CREATE_PUPPY:
            return [
            ...state,
            action.data,
        ];
        case actions.ADOPT_PUPPY:
            return state.map(puppy => {
                if (puppy.id === action.data) {
                    return { ...puppy, available: false }
                }
                return puppy
            });
        default:
            return state
    }
}

export default puppyReducers