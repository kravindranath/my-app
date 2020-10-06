import React from 'react';
import _debounce from 'lodash/debounce';

//https://www.googleapis.com/books/v1/volumes?q=harry+potter&callback=handleResponse&maxResults=40

import './default.css';

class BooksPage extends React.Component {

    constructor() {
        super();
        this.state = {
            books: [],
            searchTerm: ''
        }
        this.inpRef = React.createRef();
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.fetchBookData = this.fetchBookData.bind(this);
    }

    fetchBookData(searchTerm){
        console.log('this called ', searchTerm);
    }

    onChangeHandler(evt){
        var me = this;
        var searchTerm = me.inpRef.current.value;
        this.setState({
            searchTerm: searchTerm
        });
        me.fetchBookData(searchTerm)
    }

    render() {
        var searchTerm = this.state.searchTerm;
        var hasKeyword =  (this.state.searchTerm.length > 0);
    
        return (
            <div>
                <h1>Books</h1>
                <div className="SearchBox">
                    <input ref={this.inpRef} onChange={this.onChangeHandler} type="search" placeholder="ex: Harry Potter" />
                </div>
                <div className="results">
                    { hasKeyword &&
                       <div className="res-msg">{`Showing results for '${searchTerm}'`}</div>
                    }
                    Results
                </div>
            </div>
        );
    }
}

export default BooksPage;
