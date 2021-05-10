import React from 'react';
import Shelf from './Shelf.js';
import {Link} from "react-router-dom";


const LibraryHeader = () => {
    return <div className="flex p-8 justify-center bg-green-600 text-white text-3xl font-semibold">
        MyReads
    </div>
}

class Library extends React.Component {

    filterBooks = (shelfName) => {
        return this.props.books.filter(
            (book) => {
                return book.shelf === shelfName;
            }
        )
    }

    render() {
        return (
            <div>
                <LibraryHeader/>
                <div className="mx-8 mt-12">
                    <div className="mx-8 pb-2 font-bold text-2xl border-b-2 border-gray-100">
                        Currently reading
                    </div>
                    <Shelf
                        books={this.filterBooks("currentlyReading")}
                        updateShelf={this.props.updateShelf}
                    />
                    <div className="mx-8 pb-2 font-bold text-2xl border-b-2 border-gray-100">
                        Want to read
                    </div>
                    <Shelf
                        books={this.filterBooks("wantToRead")}
                        updateShelf={this.props.updateShelf}
                    />
                    <div className="mx-8 pb-2 font-bold text-2xl border-b-2 border-gray-100">
                        Already read
                    </div>
                    <Shelf
                        books={this.filterBooks("read")}
                        updateShelf={this.props.updateShelf}
                    />
                    <Link to="/search">
                        <div
                            className="bg-green-600 h-12 w-12 rounded-full flex justify-center items-center mr-10 mb-10 shadow-md fixed bottom-0 right-0"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                 stroke="white">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Library;
