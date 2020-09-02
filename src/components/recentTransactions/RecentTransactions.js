import React from 'react';
import SearchBar from '../searchBar/SearchBar';
import SortTransactions from '../sortTransactions/SortTransactions';
import { connect } from 'react-redux';
import { getTransactions,  getBalance} from '../../actions';

class RecentTransactions extends React.Component {
    componentDidMount() {
        this.props.getTransactions();
        this.props.getBalance();
    }

    renderTransactions() {
    const renderTransactionsData = this.props.statereducer.transactions ? this.props.statereducer.transactions : (this.props.filereducer ? this.props.filereducer : null);    
    if (renderTransactionsData) {
            return renderTransactionsData.map((tr, index) => {
                if (!tr.totalAmount) {
                    return (
                        <div key={index} className="transctionItems">
                            <p id="transactionDate">{tr.transactionDate}</p>
                            <img id="merchantLogo" src={tr.merchantLogo} alt="merchantLogo" />
                            <p id="merchant"><span id="merchantText">{tr.merchant}</span> <br /><span>{tr.transactionType}</span></p>
                            <p id="amount">-${tr.amount}</p>
                        </div>
                    )
                }
                return null;
            })
        }
    }

    render() {
        return (
            <>
                <h4>Recent Transactions</h4>
                <div className="recentTransactions">
                    <SearchBar />
                    <SortTransactions />
                    {this.renderTransactions()}
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    
    return {
        filereducer: state.filereducer,
        statereducer: state.searchreducer
    }
}

export default connect(mapStateToProps, { getTransactions, getBalance })(RecentTransactions);