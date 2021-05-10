import Library from "./components/Library.js";
import Search from "./components/Search.js";
import React from 'react';
import * as BooksAPI from './BooksAPI.js';
import {Route} from "react-router-dom";
import {throttle} from "underscore";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchResults: [],
            searchReturnedError: false,
            errorMessageShouldShow: true
        }
        this.handleSearchThrottled = throttle(this.handleSearch, 1000);
    }

    addBookToShelf(book, shelf){
        this.setState((previousState) => {
            book['shelf'] = shelf;
            return {
                books: [...previousState.books, book]
            }
        })
    }

    updateBookToShelf(book, shelf){
        this.setState({
            books: this.state.books.map(
                (b) => {
                    if(b.id === book.id){
                        b.shelf = shelf;
                    }
                    return b;
                }
            ).filter((b) => b.shelf !== 'none')
        })
    }

    updateShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then(() => {
            this.state.books.filter((b) => b.id === book.id).length > 0 ? this.updateBookToShelf(book, shelf) : this.addBookToShelf(book, shelf);
            }).catch((e) => {
            console.log(e);
        })
    }

    searchCouldNotComplete = () => {
        this.setState({
            searchResults: [],
            searchReturnedError: true,
            errorMessageShouldShow: true
        });
    }

    handleSearch = (query) => {
        if(query === ''){
            this.setState({
                searchResults: [],
                errorMessageShouldShow: false
            })
            return
        }

        BooksAPI.search(query).then((results) => {
            if(results.hasOwnProperty('error')){
                this.searchCouldNotComplete();
            } else {
                results = results.map((result) => {
                    const matchingBooks = this.state.books.filter((b) => b.id === result.id);
                    if(matchingBooks.length > 0){
                        result['shelf'] = matchingBooks[0].shelf;
                    }
                    return result;
                    }
                 )
                this.setState({
                    searchResults: results,
                    searchReturnedError: false,
                    errorMessageShouldShow: true
                })
            }
        }).catch((e) => {
            console.log(e);
            this.searchCouldNotComplete();
        })
    }

    closeErrorMessage = () => {
        this.setState({
            errorMessageShouldShow: false
        });
    }

    updateShelfAndSearchResults = (book, shelf) => {
        this.updateShelf(book, shelf);
        this.setState({
            searchResults: this.state.searchResults.map(
                (b) => {
                    if(b.id === book.id){
                        b.shelf = shelf;
                    }
                    return b;
                }),
        })
    }

    componentDidMount = () => {
        BooksAPI.getAll().then((books) => {
            this.setState({books: books})
        })
    }

    render() {
        return (
            <div className="">
                <Route exact path="/">
                    <Library
                        books={this.state.books}
                        updateShelf={this.updateShelf}
                    />
                </Route>
                <Route exact path="/search">
                    <Search
                        updateShelf={this.updateShelfAndSearchResults}
                        searchResults={this.state.searchResults}
                        handleSearch={this.handleSearchThrottled}
                        searchReturnedError={this.state.searchReturnedError}
                        errorMessageShouldShow={this.state.errorMessageShouldShow}
                        closeErrorMessage={this.closeErrorMessage}
                    />
                </Route>
            </div>
        )
    }
}

export default App;
