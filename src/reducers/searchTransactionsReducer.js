import { SEARCH_TRANSACTIONS } from '../actions/types'

export default (state = [], action) => {
    switch (action.type) {
        case SEARCH_TRANSACTIONS:
            return [...state, action.payload];
        default:
            return state;
    }
};