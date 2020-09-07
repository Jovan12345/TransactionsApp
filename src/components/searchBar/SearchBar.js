import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { filterSearchValue } from '../../actions';
import { debounce } from 'lodash';

class SearchBar extends Component {
    //This function is called when the user types filter value to Search transactions
    //The debounce function is used to delay the trigger of the action for 250 miliseconds
    handleChange = debounce((event) => {
        const transcations = this.props.filereducer;
        this.props.filterSearchValue(event.target.value, transcations);
    }, 250);

    renderInput(field) {
        return <input type='text' placeholder="Search transactions" {...field.input} />;
    };

    clearInput = () => {
        const transcations = this.props.sortrecuder.transcations ? this.props.sortrecuder.transcations : this.props.filereducer;
        this.props.filterSearchValue('', transcations);
        this.props.change("query", null);
    };

    showClearButton() {
        const filterValue = this.props.searchreducer.value;
        if (filterValue) {
            return (
                <button type="reset" class="close" aria-label="Close">
                    <span aria-hidden="true" onClick={this.clearInput}>&times;</span>
                </button>
            )
            // return <button type="reset" onClick={this.clearInput}>X</button>;
        }
        return null;
    };

    render() {
        return (
            <form className="searchbar" onSubmit={e => { e.preventDefault() }} autoComplete="off">
                <Field id="resetButton" name='query' component={this.renderInput} onChange={this.handleChange} />
                {this.showClearButton()}
            </form>
        );
    };
};

const mapStateToProps = (state) => {

    return {
        filereducer: state.filereducer,
        searchreducer: state.searchreducer,
        sortrecuder: state.sortReducer
    };
};

export default connect(mapStateToProps, { filterSearchValue })(reduxForm({
    form: 'searchBar'
})(SearchBar));