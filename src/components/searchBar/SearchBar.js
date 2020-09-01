import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { filterSearchValue } from '../../actions'

class SearchBar extends Component {
    handleFormSubmit = ({ query }) =>{
        const transcations = this.props.filereducer;
        this.props.filterSearchValue(query, transcations);
    }

    renderInput(field) {
        return <input type='text' placeholder="Search transactions" {...field.input} />
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form className="searchbar" onSubmit={handleSubmit(this.handleFormSubmit)}>
                <Field name='query' component={this.renderInput} />
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    
    return { filereducer: state.filereducer }
}

export default connect(mapStateToProps, { filterSearchValue })(reduxForm({
    form: 'searchBar'
})(SearchBar));