import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import { makeNewTransaction, updateBalance, showModal, stageFormValues } from '../../actions';

import arrows from '../../utilities/arrows.png';
import TransactionModal from '../transactionModal/transactionModal';

class MakeTransfer extends React.Component {
    renderError({ error, submitFailed }) {
        if (submitFailed) {
            return (
                <>
                    {error}
                </>
            );
        }
    }

    renderInput = ({ input, label, meta, placeholder, disabled }) => {
        return (
            <div className="transactionFields">
                <label> {label}</label>
                <>
                    <input {...input} autoComplete="off" placeholder={placeholder} disabled={disabled} />
                    <p className="errorMessage">{this.renderError(meta)}</p>
                </>
            </div>
        );
    }

    onSubmit = (formValues) => {
        this.props.showModal(true);
        this.props.stageFormValues(formValues);
    }

    render() {
        const balance = this.props.balancereducer.totalAmount ? this.props.balancereducer.totalAmount : '';
        return (
            <>
                <img src={arrows} alt="arrowsIcon" className="arrowsIcon"></img>
                <h5 className="componentTransferHeader">Make a transfer</h5>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="makeTransferForm">
                    <Field name="fromAmount" component={this.renderInput} label="FROM ACCOUNT" placeholder={`Free Checking $${balance}`} disabled="disabled" />
                    <Field name="merchant" component={this.renderInput} required label="TO ACCOUNT" placeholder='Georgia Power Electric Company' />
                    <Field name="amount" type="number" component={this.renderInput} label="AMOUNT" placeholder='$ 0.00' />
                    <button className="submitButton" type="submit">Submit</button>
                </form>
                <TransactionModal />
            </>
        )
    }
}

// Validate users input in form
const validate = formValues => {
    const errors = {};
    //TO ACCOUNT input field
    if (!formValues.merchant) {
        errors.merchant = 'Please enter a value';
    }

    //AMOUNT input field
    if (!formValues.amount) {
        errors.amount = 'Please enter amount';
    } else if (isNaN(formValues.amount)) {
        errors.amount = 'Please enter valid value for amount';
    } else if (formValues.amount < 0 || formValues.amount > 500) {
        errors.amount = "Amount per transaction must be between $0 and $500";
    }

    return errors;
}

// Resest form values after submit button is pressed 
const afterSubmit = (result, dispatch) => {
    console.log('afterSubmit')
    dispatch(reset('makeAmountTransfer'));
}

const mapStateToProps = state => {
    return {
        filereducer: state.filereducer,
        balancereducer: state.balancereducer
    }
}

export default connect(mapStateToProps, { makeNewTransaction, updateBalance, showModal, stageFormValues })(reduxForm({
    form: 'makeAmountTransfer',
    validate,
    onSubmitSuccess: afterSubmit
})(MakeTransfer));