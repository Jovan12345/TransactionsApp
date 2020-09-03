import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortTransactions } from '../../actions/index'


class SortTransactions extends Component {

    buttonHandler(event) {
        const renderTransactionsData = this.props.statereducer.transactions !== undefined ? this.props.statereducer.transactions : (this.props.filereducer ? this.props.filereducer : null);
        let sortedTransactionsData;
        switch (event.target.value) {
            case 'Date':
                sortedTransactionsData = renderTransactionsData.sort((a, b) => a.transactionDate.localeCompare(b.transactionDate));
                break;
            case 'Beneficiary':
                sortedTransactionsData = renderTransactionsData.sort((a, b) => a.merchant.localeCompare(b.merchant));
                break;
            case 'Amount':
                sortedTransactionsData = renderTransactionsData.sort((a, b) => a.amount - b.amount);
                break;
            default:
                return new Error();
        }

        this.props.sortTransactions(sortedTransactionsData)
    }

    render() {
        return (
            <div className="sortButtons">
                <p>Sort by: </p>
                <input type="button" id="one" value="Date" onClick={(e) => this.buttonHandler(e)} />
                <input type="button" id="two" value="Beneficiary" onClick={(e) => this.buttonHandler(e)} />
                <input type="button" id="three" value="Amount" onClick={(e) => this.buttonHandler(e)} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        filereducer: state.filereducer,
        statereducer: state.searchreducer
    }
}

export default connect(mapStateToProps, { sortTransactions })(SortTransactions)