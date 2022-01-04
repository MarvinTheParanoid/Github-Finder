import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    
    state = {
        text : '',
    };

    static propTypes = {
        searchFunc : PropTypes.func.isRequired,
        clearFunc : PropTypes.func.isRequired,
        showClear : PropTypes.bool.isRequired,
        alertFunc : PropTypes.func.isRequired,
    };

    updateText (e) {
        this.setState({[e.target.name] : e.target.value})
    };

    formSubmit (e) {
        e.preventDefault();
        this.props.searchFunc(this.state.text);
        // this.setState({text : ''});
        this.state.text === '' && this.props.alertFunc('Please enter a user\'s name...','light')
    };

    render () {
        const { clearFunc, showClear } = this.props;
        return (
            <>
                <form onSubmit={this.formSubmit.bind(this)} className='form-text'>
                    <input type='text' name='text' placeholder='Search Users...' value={this.state.text} onChange={this.updateText.bind(this)}/>
                    <button
                        type='submit'
                        className='btn btn-dark btn-block'
                        disabled={this.state.text === '' ? true : false}
                        >Search</button>
                </form>
                {showClear && <button className='btn btn-light btn-block my' onClick={clearFunc}>Clear</button>}
            </>
        )
    }
}

export default Search
