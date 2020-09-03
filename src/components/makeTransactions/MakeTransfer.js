import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import { makeNewTransaction, updateBalance, showModal, stageFormValues } from '../../actions';

import TransactionModal from '../transactionModal/transactionModal';

class MakeTransfer extends React.Component {

    renderError({ error, touched }) {
        if (touched && error) {
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
                    {this.renderError(meta)}
                </>
            </div>
        );
    }

    onSubmit = (formValues) => {
        
        this.props.showModal(true)

        this.props.stageFormValues(formValues)

        console.log(formValues)
        //this.props.makeNewTransaction(formValues)

        //update total Balance
        //const newBalance = this.props.balancereducer.totalAmount - formValues.amount;
        //this.props.updateBalance(newBalance);
    }

    render() {
        const balance = this.props.balancereducer.totalAmount ? this.props.balancereducer.totalAmount : '';
        return (
            <>
                <h4>Make a transfer</h4>
                
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="makeTransferForm">
                    <Field name="fromAmount" component={this.renderInput} label="FROM ACCOUNT" placeholder={`Free Checking(4692) $${balance}`} disabled="disabled" />
                    <Field name="merchant" component={this.renderInput} label="TO ACCOUNT" placeholder='Georgia Power Electric Company' />
                    <Field name="amount" component={this.renderInput} label="AMOUNT" placeholder='$ 0.00' />
                    <TransactionModal />
                    <button type="submit">Submit</button>
                </form>
                

            </>
        )
    }
}

// Validate users input in form
const validate = (formValues) => {
    const errors = {};
    //TO ACCOUNT input field
    if (!formValues.merchant) {
        errors.merchant = 'You must enter a value for TO ACCOUNT';
    }

    //AMOUNT input field
    if (!formValues.amount) {
        errors.amount = 'You must enter AMOUNT';
    } else if (isNaN(formValues.amount)) {
        errors.amount = 'You must enter valid value for AMOUNT';
    } else if (formValues.amount < 0 || formValues.amount > 500) {
        errors.amount = "Amount per transaction must be between $0 and $500"
    }

    return errors;
}

// Resest form values after submit button is pressed 
const afterSubmit = (result, dispatch) => {
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