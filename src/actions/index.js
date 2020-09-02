import transactionsAPI from '../apis/transactions';
import image from '../utilities/new-logo.png';
import { FILE_TRANSACTIONS, NEW_TRANSACTION, SEARCH_TRANSACTIONS, SORT_TRANSACTIONS } from './types'

export const getTransactions = () => async dispatch => {
    const fileData = await transactionsAPI.get('/data');
    fileData.data.forEach(element => {
        return element.transactionDate = new Date(element.transactionDate).toDateString().slice(4, 10);
    });

    dispatch({ type: FILE_TRANSACTIONS, payload: fileData.data });
}

export const makeNewTransaction = formValues => dispatch => {
    formValues.transactionDate = (new Date()).toDateString().slice(4, 10);
    formValues.id = Date.now();
    formValues.merchantLogo = image;
    formValues.transactionType = "Online Transfer";

    transactionsAPI.post('/data', formValues);

    dispatch({ type: NEW_TRANSACTION, payload: formValues });
}

export const updateTotalAmount = amount => dispatch => {
    
}

export const filterSearchValue = (value, transactionsInput) => dispatch => {
    const transactions = value === '' ? transactionsInput : transactionsInput.filter(x => x.merchant.toLowerCase().indexOf(value) !== -1)

    dispatch({
        type: SEARCH_TRANSACTIONS,
        payload: { transactions, value }
    });
}

export const sortTransactions = transactions => dispatch => {

    dispatch({
        type: SORT_TRANSACTIONS,
        payload: { transactions }
    });
}