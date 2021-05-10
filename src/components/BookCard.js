import React from 'react';
import NoThumbnailAvailable from '../img/NoThumbnailAvailable.png';
import PropTypes from 'prop-types';

const BookCard = (props) => {
    return (
        <div className="m-8 flex flex-col flex-initial">
            <div className="flex items-end">
                <img
                    className="shadow-md mb-8 h-80"
                    alt="Book thumbnail"
                    src={
                        (props.book.hasOwnProperty('imageLinks') &&
                            props.book.imageLinks.hasOwnProperty('thumbnail')) ? props.book.imageLinks.thumbnail : NoThumbnailAvailable}/>
                <div className="bg-green-600 h-12 w-12 rounded-full flex justify-center items-center -ml-8 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-100 stroke-white"
                         viewBox="0 0 24 24" stroke="white">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                    </svg>
                    <select
                        className="opacity-0 absolute"
                        value={props.book.hasOwnProperty('shelf') ? props.book.shelf : 'none'}
                        onChange={(e) => props.updateShelfForBook(e.target.value)}
                    >
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div
                className="text-sm tracking-tight w-52">{props.book.hasOwnProperty('title') ? props.book.title : "No title"}</div>
            <div
                className="text-sm text-gray-500 tracking-tight w-52">{props.book.hasOwnProperty('authors') ? props.book.authors.join(" & ") : "No authors"}</div>
        </div>
    )
}

BookCard.propTypes = {
    book: PropTypes.object,
    updateShelfForBook: PropTypes.func
}

export default BookCard;
