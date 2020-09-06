import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortTransactions } from '../../actions/index';

class SortTransactions extends Component {

    buttonHandler(event) {
        const renderTransactionsData = this.props.searchreducer.transactions !== undefined ? this.props.searchreducer.transactions : (this.props.filereducer ? this.props.filereducer : null);
        let sortedTransactionsData;
        switch (event.target.name) {
            case 'DescendingDate':
                sortedTransactionsData = renderTransactionsData.sort((a, b) => b.transactionDate.localeCompare(a.transactionDate));
                break;
            case 'AscendingDate':
                sortedTransactionsData = renderTransactionsData.sort((a, b) => a.transactionDate.localeCompare(b.transactionDate));
                break;
            case 'DescendingBeneficiary':
                sortedTransactionsData = renderTransactionsData.sort((a, b) => b.merchant.localeCompare(a.merchant));
                break;
            case 'AscendingBeneficiary':
                sortedTransactionsData = renderTransactionsData.sort((a, b) => a.merchant.localeCompare(b.merchant));
                break;
            case 'DescendingAmount':
                sortedTransactionsData = renderTransactionsData.sort((a, b) => b.amount - a.amount);
                break;
            case 'AscendingAmount':
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
                <p className="sortButton">Sort by: </p>
                <div className="dropdown">
                    <p className="dropbtn">DATE</p>
                    <div className="dropdown-content">
                        <input type="button" name="AscendingDate" value="Ascending" onClick={(e) => this.buttonHandler(e)} />
                        <input type="button" name="DescendingDate" value="Descending" onClick={(e) => this.buttonHandler(e)} />
                    </div>
                </div>
                <div className="dropdown2">
                    <p className="dropbtn">BENEFICIARY</p>
                    <div className="dropdown-content">
                        <input type="button" name="AscendingBeneficiary" value="Ascending" onClick={(e) => this.buttonHandler(e)} />
                        <input type="button" name="DescendingBeneficiary" value="Descending" onClick={(e) => this.buttonHandler(e)} />
                    </div>
                </div>
                <div className="dropdown3">
                    <p className="dropbtn">AMOUNT</p>
                    <div className="dropdown-content">
                        <input type="button" name="AscendingAmount" value="Ascending" onClick={(e) => this.buttonHandler(e)} />
                        <input type="button" name="DescendingAmount" value="Descending" onClick={(e) => this.buttonHandler(e)} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        filereducer: state.filereducer,
        searchreducer: state.searchreducer
    }
}

export default connect(mapStateToProps, { sortTransactions })(SortTransactions)