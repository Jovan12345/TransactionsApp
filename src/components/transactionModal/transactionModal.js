import React from 'react';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { showModal, makeNewTransaction, updateBalance, sortTransactions, filterSearchValue } from '../../actions'

class TransactionModal extends React.Component {

    handleClose = () => {
        this.props.showModal(false)
    };

    

    submitTransaction = () => {
        this.props.sortTransactions("");
        this.props.filterSearchValue("");
        this.props.makeNewTransaction(this.props.formvaluesreducer);
        this.props.showModal(false)

        //update total Balance
        const newBalance = this.props.balancereducer.totalAmount - this.props.formvaluesreducer.amount;
        this.props.updateBalance(newBalance);
        
    };

    render() {
        return (
            <>
                <Modal show={this.props.modalreducer} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Transaction Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>To Account: <b>{this.props.formvaluesreducer.merchant}</b></p>
                        <p>Amount: <b>{this.props.formvaluesreducer.amount}</b></p>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="closeBtn" onClick={this.handleClose}>Close</button>
                        <button className="success" onClick={this.submitTransaction}>Transfer</button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        modalreducer: state.modalreducer,
        formvaluesreducer: state.formvaluesreducer,
        balancereducer: state.balancereducer
    }
}

export default connect(mapStateToProps, { showModal, makeNewTransaction, updateBalance, sortTransactions, filterSearchValue })(TransactionModal);