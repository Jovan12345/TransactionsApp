import { NEW_TRANSACTION, FILE_TRANSACTIONS } from '../actions/types'

export default (state = [], action) => {
    switch (action.type) {
        case FILE_TRANSACTIONS:
            return action.payload;
        case NEW_TRANSACTION:
            return [...state, action.payload]
        default:
            return state;
    }
};