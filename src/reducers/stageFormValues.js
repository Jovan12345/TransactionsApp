import { STAGEFORMVALUES } from '../actions/types'

export default (state = [], action) => {
    switch (action.type) {
        case STAGEFORMVALUES:
            return action.payload;
        default:
            return state;
    }
};