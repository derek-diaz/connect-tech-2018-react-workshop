import {actions} from '../actions/availabilityFilterActions'

export default function availabilityFilterReducer(state = 'SHOW_ALL', action) {
    switch (action.type) {
        case actions.UPDATE_FILTER:
            return action.data;
        default:
            return state
    }
}