import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import { makeNewTransaction } from '../../actions'

class MakeTransfer extends React.Component {
    componentDidMount() {
        this.props.getTransactions();
    }

    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div>{error}</div>
            );
        }
    }

    renderInput = ({ input, label, meta, placeholder, disabled }) => {
        return (
            <div className="transactionFields">
                <label> {label}</label>
                <div>
                    <input {...input} autoComplete="off" placeholder={placeholder} disabled={disabled} />
                    {this.renderError(meta)}
                </div>
            </div>
        );
    }

    onSubmit = (formValues) => {
        this.props.makeNewTransaction(formValues)
    }

    render() {
        

        return (
            <>
                <h4>Make a transfer</h4>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="makeTransferForm">
                    <Field name="fromAmount" component={this.renderInput} label="FROM ACCOUNT" placeholder={`Free Checking(4692)`} disabled="disabled" />
                    <Field name="merchant" component={this.renderInput} label="TO ACCOUNT" placeholder='Georgia Power Electric Company'/>
                    <Field name="amount" component={this.renderInput} label="AMOUNT" placeholder='$ 0.00'/>
                    <button>Submit</button>
                </form>
            </>
        )
    }
}

const validate = (formValues) => {
    const errors = {};
    if (!formValues.merchant) {
        errors.merchant = 'You must enter a value for TO ACCOUNT';
    }

    if (!formValues.amount) {
        errors.amount = 'You must enter AMOUNT';
    } else if (isNaN(formValues.amount)) {
        errors.amount = 'You must enter valid value for AMOUNT';
    } else if ( formValues.amount < 0 || formValues.amount > 500){
        errors.amount = "Amount per transaction must be between $0 and $500"
    }

    return errors;
}

const afterSubmit = (result, dispatch) =>
    dispatch(reset('makeAmountTransfer'));


const mapStateToProps = state => {
    return {
        filereducer: state.filereducer
    }

}

export default connect(mapStateToProps, { makeNewTransaction })(reduxForm({
    form: 'makeAmountTransfer',
    validate,
    onSubmitSuccess: afterSubmit
})(MakeTransfer));