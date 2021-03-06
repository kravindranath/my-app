import React from 'react';
import Book from './Book';

//https://www.googleapis.com/books/v1/volumes?q=harry+potter&callback=handleResponse&maxResults=40

import './default.css';

var stripSpecialRegex = /\W+/gi;
var stripHtmlRegex = /(<([^>]+)>)/gi;

class BooksPage extends React.Component {

    constructor() {
        super();
        this.state = {
            items: [],
            searchTerm: ''
        }
        this.inpRef = React.createRef();
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.fetchBookData = this.fetchBookData.bind(this);
        this.debTimer = null;
    }

    fetchBookData(searchTerm){
        var me = this;
        var cleanSearch = searchTerm.replace(stripHtmlRegex, "");
        cleanSearch = cleanSearch.replace(stripSpecialRegex, '+');
        var apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${cleanSearch}&maxResults=40`

        if(this.debTimer !== null){
            clearTimeout(this.debTimer);
        }
        this.debTimer = setTimeout(function(){
            fetch(apiUrl).then((res)=>{
                return res.json();
            }).then((data)=>{
                me.setState({
                    items: (data && data.items) || []
                })
            })
        }, 1000)
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

        var items = this.state.items || [];
        var totalItems = items.length;

        var renderMarkup = items.map((item)=>{
            var book = new Book(item);
                return (
                    <div className="book" key={book.isbn_10}>
                        <div className="img">
                            <img loading="lazy" alt={book.title} src={book.imageSrc} />
                        </div>
                        <div className="desc">
                            <p className="title">{book.title}</p>
                            <p className="publishInfo">{book.publishInfo}</p>
                        </div>
                    </div>
                )
            });   

        return (
            <div>
                <h1>Books</h1>
                <div className="SearchBox">
                    <input ref={this.inpRef} onChange={this.onChangeHandler} type="search" placeholder="ex: Harry Potter" />
                </div>
                <div className="results">
                    { hasKeyword &&
                       <div className="res-msg">{`Showing ${totalItems} results for '${searchTerm}'`}</div>
                    }
                    <div className="row">
                        {renderMarkup}
                    </div>
                </div>
            </div>
        );
    }
}

export default BooksPage;
