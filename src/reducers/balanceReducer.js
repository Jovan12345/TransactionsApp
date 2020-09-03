import { BALANCE, BALANCEUPDATE } from '../actions/types'

export default (state = [], action) => {
    switch (action.type) {
        case BALANCE:
            return action.payload;
        case BALANCEUPDATE:
            return action.payload;
        default:
            return state;
    }
};