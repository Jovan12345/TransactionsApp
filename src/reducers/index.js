import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import fileTransData from './fileTransactionsDataReducer';
import searchTransData from './searchTransactionsReducer';
import balance from './balanceReducer';
import modal from './modalReducer';

export default combineReducers({
    form: formReducer,
    filereducer: fileTransData,
    searchreducer : searchTransData,
    balancereducer: balance,
    modalreducer: modal
})