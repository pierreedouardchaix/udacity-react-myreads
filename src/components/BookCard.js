import React from 'react';
import NoThumbnailAvailable from '../img/NoThumbnailAvailable.png';

class BookCard extends React.Component {

    render() {
        return (
            <div className="m-8 flex flex-col flex-initial">
                <div className="flex items-end">
                    <img
                        className="shadow-md mb-8 h-80"
                        alt="Book thumbnail"
                        src={
                            (this.props.book.hasOwnProperty('imageLinks') &&
                                this.props.book.imageLinks.hasOwnProperty('thumbnail')) ? this.props.book.imageLinks.thumbnail : NoThumbnailAvailable}/>
                    <div className="bg-green-600 h-12 w-12 rounded-full flex justify-center items-center -ml-8 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-100 stroke-white" viewBox="0 0 24 24" stroke="white">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                        </svg>
                        <select
                            className="opacity-0 absolute"
                            value={this.props.book.hasOwnProperty('shelf') ? this.props.book.shelf : 'none' }
                            onChange={(e) => this.props.updateShelfForBook(e.target.value)}
                        >
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="text-sm tracking-tight w-52">{this.props.book.hasOwnProperty('title') ? this.props.book.title : "No title"}</div>
                <div className="text-sm text-gray-500 tracking-tight w-52">{this.props.book.hasOwnProperty('authors') ? this.props.book.authors.join(" & ") : "No authors"}</div>
            </div>
        )
    }
}

export default BookCard;
