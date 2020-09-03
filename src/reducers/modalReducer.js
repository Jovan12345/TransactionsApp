import { MODALUPDATE } from '../actions/types'

export default (state = false, action = false) => {
    switch (action.type) {
        case MODALUPDATE:
            return action.payload;
        default:
            return state;
    }
};