import React from 'react';
import SearchBar from '../searchBar/SearchBar';
import SortTransactions from '../sortTransactions/SortTransactions';
import { connect } from 'react-redux';
import { getTransactions, getBalance } from '../../actions';
import briefcase from '../../utilities/briefcase.png';

class RecentTransactions extends React.Component {
    componentDidMount() {
        this.props.getTransactions();
        this.props.getBalance();
    }

    renderTransactions() {
        const sortReducer = this.props.sortrecuder.transactions;
        const searchReducer = this.props.searchreducer.transactions;
        const fileReducer = this.props.filereducer;
        const renderTransactionsData = searchReducer ? searchReducer : (sortReducer ? sortReducer : (fileReducer ? fileReducer : null));
        if (renderTransactionsData.length !== 0) {
            return renderTransactionsData.map((tr, index) => {
                const color = tr.categoryCode;
                if (!tr.totalAmount) {
                    tr.transactionDate = new Date(tr.transactionDate).toDateString().slice(4, 10);
                    return (
                        <div key={index} className="transctionItems" style={{ borderLeft: `8px solid ${color}` }}>
                            <p id="transactionDate">{tr.transactionDate}</p>
                            <img id="merchantLogo" src={tr.merchantLogo} alt="merchantLogo" />
                            <p id="merchant"><span id="merchantText">{tr.merchant}</span> <br /><span>{tr.transactionType}</span></p>
                            <p id="amount">-${tr.amount}</p>
                        </div>
                    )
                }
                return <div>Jovan</div>;
            })
        } else if(this.props.searchreducer.transactions){
            return <div><p className="noMatch">No search results were found</p></div>
        }

    }

    render() {
        return (
            <>
                <img src={briefcase} alt="briefcase" className="briefcase"></img>
                <h5 className="componentTransactionsHeader">Recent Transactions</h5>
                <div className="recentTransactions">
                    <header className="row">
                        <div className="col-lg-6">
                            <SearchBar />
                        </div>
                        <div className="col-lg-6">
                            <SortTransactions />
                        </div>
                    </header>
                    <div className="allTransactions">
                        {this.renderTransactions()}
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        filereducer: state.filereducer,
        searchreducer: state.searchreducer,
        sortrecuder: state.sortReducer
    }
}

export default connect(mapStateToProps, { getTransactions, getBalance })(RecentTransactions);