import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import fileTransData from './fileTransactionsDataReducer';
import searchTransData from './searchTransactionsReducer';
import balance from './balanceReducer';
import modal from './modalReducer';
import stageFormValues from './stageFormValues';
import sortReducer from './sortReducer';
import sortButtonReducer from './sortButtonClicked';

export default combineReducers({
    form: formReducer,
    filereducer: fileTransData,
    searchreducer : searchTransData,
    balancereducer: balance,
    modalreducer: modal,
    formvaluesreducer: stageFormValues,
    sortReducer: sortReducer,
    sortButtonReducer: sortButtonReducer
})