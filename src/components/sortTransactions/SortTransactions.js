import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortTransactions, sortButtonClicked } from '../../actions/index';

class SortTransactions extends Component {

    buttonHandler(event) {
        const renderTransactionsData = this.props.searchreducer.transactions !== undefined ? this.props.searchreducer.transactions : (this.props.filereducer ? this.props.filereducer : null);
        let sortedTransactionsData;

        if (event.target.name) {
            this.props.sortButtonClicked(event.target.name);
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
                    return null;
            }
            this.props.sortTransactions(sortedTransactionsData)
        }
    }

    buttonSelected(field){
        const selectedButton = this.props.sortButtonReducer.indexOf(field) === -1 ? "" : "chooseSort";
        return selectedButton; 
    }

    render() {
        return (
            <div className="sortButtons" onClick={(e) => this.buttonHandler(e)}>
                <p className="sortButton">Sort by: </p>
                <div className="dropdown">
                    <p className="dropbtn" selecedbtn={this.buttonSelected("Date")}>DATE</p>
                    <div className="dropdown-content">
                        <input type="button" name="AscendingDate" value="Ascending" selecedbtn={this.buttonSelected("AscendingDate")}/>
                        <input type="button" name="DescendingDate" value="Descending" selecedbtn={this.buttonSelected("DescendingDate")}/>
                    </div>
                </div>
                <div className="dropdown2">
                    <p className="dropbtn" selecedbtn={this.buttonSelected("Beneficiary")}>BENEFICIARY</p>
                    <div className="dropdown-content">
                        <input type="button" name="AscendingBeneficiary" value="Ascending" selecedbtn={this.buttonSelected("AscendingBeneficiary")}/>
                        <input type="button" name="DescendingBeneficiary" value="Descending" selecedbtn={this.buttonSelected("DescendingBeneficiary")}/>
                    </div>
                </div>
                <div className="dropdown3">
                    <p className="dropbtn" selecedbtn={this.buttonSelected("Amount")}>AMOUNT</p>
                    <div className="dropdown-content">
                        <input type="button" name="AscendingAmount" value="Ascending" selecedbtn={this.buttonSelected("AscendingAmount")}/>
                        <input type="button" name="DescendingAmount" value="Descending" selecedbtn={this.buttonSelected("DescendingAmount")}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        filereducer: state.filereducer,
        searchreducer: state.searchreducer,
        sortButtonReducer: state.sortButtonReducer
    }
}

export default connect(mapStateToProps, { sortTransactions, sortButtonClicked })(SortTransactions)