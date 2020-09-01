import React from 'react';
import SearchBar from '../searchBar/SearchBar';
import { connect } from 'react-redux';
import { getTransactions } from '../../actions';

class RecentTransactions extends React.Component {
    componentDidMount() {
        this.props.getTransactions();
    }



    renderTransactions() {
    const renderTransactionsData = this.props.statereducer ? this.props.statereducer : (this.props.filereducer ? this.props.filereducer : null)
    console.log(renderTransactionsData)    
        if (renderTransactionsData) {
            return renderTransactionsData.map((tr, index) => {
                if (!tr.totalAmount) {
                    return (
                        <div key={index} className="transctionItems">
                            <p id="transactionDate">{tr.transactionDate}</p>
                            <img id="merchantLogo" src={tr.merchantLogo} alt="merchantLogo" />
                            <p id="merchant"><span id="merchantText">{tr.merchant}</span> <br /><span>{tr.transactionType}</span></p>
                            <p id="amount">{tr.amount}</p>
                        </div>
                    )
                }
                return null;
            })
        }
    }

    render() {
        console.log('yes')
        return (
            <>
                <h4>Recent Transactions</h4>
                <div className="recentTransactions">
                    <SearchBar />
                    {this.renderTransactions()}
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    
    return {
        filereducer: state.filereducer,
        statereducer: state.reducer
    }
}

export default connect(mapStateToProps, { getTransactions })(RecentTransactions);