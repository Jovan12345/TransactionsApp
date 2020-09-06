import {  SORT_TRANSACTIONS } from '../actions/types'

export default (state = [], action) => {
    switch (action.type) {
        case SORT_TRANSACTIONS:
            return action.payload
        default:
            return state;
    }
};