import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    
    state = {
        text : '',
    };

    static propTypes = {
        searchFunc : PropTypes.func.isRequired,
    };

    updateText (e) {
        this.setState({[e.target.name] : e.target.value})
    };

    formSubmit (e) {
        e.preventDefault();
        this.props.searchFunc(this.state.text);
        this.setState({text : ''});
    };

    render () {
        return (
            <form onSubmit={this.formSubmit.bind(this)} className='form'>
                <input type='text' name='text' placeholder='Search Users...' value={this.state.text} onChange={this.updateText.bind(this)}/>
                <button type='submit' className='btn btn-dark btn-block'>Search</button>
            </form>
        )
    }
}

export default Search
