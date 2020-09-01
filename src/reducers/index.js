import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import fileTransData from './fileTransactionsDataReducer';

export default combineReducers({
    form: formReducer,
    filereducer: fileTransData
})