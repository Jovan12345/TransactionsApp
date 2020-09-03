import React from 'react';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { showModal } from '../../actions'

class TransactionModal extends React.Component {
    handleClose = () => {
        this.props.showModal(false)
    };

    render() {
        return (
            <>
                <Modal show={this.props.modalreducer} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <button onClick={this.handleClose}>Close</button>
                        <button onClick={this.handleClose}>Submit</button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        modalreducer: state.modalreducer
    }
}

export default connect(mapStateToProps, { showModal })(TransactionModal);