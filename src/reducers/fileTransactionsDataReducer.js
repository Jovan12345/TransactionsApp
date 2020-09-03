import { NEW_TRANSACTION, FILE_TRANSACTIONS } from '../actions/types'

export default (state = [], action) => {
    switch (action.type) {
        case FILE_TRANSACTIONS:
            return action.payload;
        case NEW_TRANSACTION:
            return [action.payload, ...state]
        default:
            return state;
    }
};