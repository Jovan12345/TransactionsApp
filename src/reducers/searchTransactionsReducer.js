import { SEARCH_TRANSACTIONS, SORT_TRANSACTIONS } from '../actions/types'

export default (state = [], action) => {
    switch (action.type) {
        case SEARCH_TRANSACTIONS:
            return action.payload;
        case SORT_TRANSACTIONS:
            return action.payload
        default:
            return state;
    }
};