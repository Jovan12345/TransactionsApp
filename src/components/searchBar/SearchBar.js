import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { filterSearchValue } from '../../actions';
import { debounce } from 'lodash';

class SearchBar extends Component {
    handleFormSubmit(event) {
        event.preventDefault();
    }

    handleChange = debounce((event) => {
        const transcations = this.props.filereducer;
        this.props.filterSearchValue(event.target.value, transcations);
    }, 250)

    renderInput(field) {
        return <input type='text' placeholder="Search transactions" {...field.input} />;
    }

    render() {
        return (
            <form className="searchbar" onSubmit={this.handleFormSubmit} autoComplete="off">
                <Field name='query' component={this.renderInput} onChange={this.handleChange} />
            </form>
        );
    }
}

const mapStateToProps = (state) => {

    return { filereducer: state.filereducer }
}

export default connect(mapStateToProps, { filterSearchValue })(reduxForm({
    form: 'searchBar'
})(SearchBar));