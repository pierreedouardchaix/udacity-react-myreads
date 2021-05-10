import React from 'react';
import BookCard from './BookCard.js';
import PropTypes from 'prop-types';

const Shelf = (props) => {
    return (
        <div className="flex w-full flex-wrap w-2/3 justify-center">
            {props.books.length === 0 && (
                <div className="m-8 text-bold">No books in this section.</div>
            )}
            {props.books.map((book) => {
                return <BookCard
                    book={book}
                    key={book.id}
                    updateShelfForBook={(shelf) => props.updateShelf(book, shelf)}
                />
            })}
        </div>
    )
}

Shelf.propTypes = {
    books: PropTypes.array,
    updateShelf: PropTypes.func
}

export default Shelf;
