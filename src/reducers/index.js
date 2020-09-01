import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import fileTransData from './fileTransactionsDataReducer';
import searchTransData from './searchTransactionsReducer';

export default combineReducers({
    form: formReducer,
    filereducer: fileTransData,
    searchreducer : searchTransData
})