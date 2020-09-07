import transactionsAPI from '../apis/transactions';
import image from '../utilities/new-logo.png';
import { FILE_TRANSACTIONS, NEW_TRANSACTION, SEARCH_TRANSACTIONS, SORT_TRANSACTIONS, BALANCE, BALANCEUPDATE, MODALUPDATE, STAGEFORMVALUES, SORTBUTTONCLICKED } from './types'


export const getTransactions = () => async dispatch => {
    const fileData = await transactionsAPI.get('/data');
    fileData.data.sort((a, b) => b.transactionDate - a.transactionDate)

    dispatch({ type: FILE_TRANSACTIONS, payload: fileData.data });
}

export const makeNewTransaction = formValues => dispatch => {
    formValues.transactionDate = Date.now();
    formValues.id = Date.now();
    formValues.merchantLogo = image;
    formValues.transactionType = "Online Transfer";

    transactionsAPI.post('/data', formValues);

    dispatch({ type: NEW_TRANSACTION, payload: formValues });
}

export const getBalance = () => async dispatch => {
    const balance = await transactionsAPI.get('/balance');
    dispatch({ type: BALANCE, payload: balance.data });
}

export const updateBalance = newBalance => dispatch => {
    const balance = {};
    balance.totalAmount = newBalance;

    transactionsAPI.put('/balance', balance);

    dispatch({ type: BALANCEUPDATE, payload: balance });
}

export const filterSearchValue = (value, transactionsInput) => dispatch => {
    const transactions = value === '' ? transactionsInput : transactionsInput.filter(x => x.merchant.toLowerCase().indexOf(value) !== -1)
    dispatch({ type: SEARCH_TRANSACTIONS, payload: { transactions, value } });
}

export const sortTransactions = transactions => dispatch => {
    dispatch({ type: SORT_TRANSACTIONS, payload: { transactions } });
}

export const showModal = showModal => dispatch => {
    dispatch({ type: MODALUPDATE, payload: showModal });
}

export const stageFormValues = formValues => dispatch => {
    dispatch({ type: STAGEFORMVALUES, payload: formValues })
}

export const sortButtonClicked = value => dispatch => {

    dispatch({ type:SORTBUTTONCLICKED, payload:value })
}