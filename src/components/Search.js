import React from 'react';
import Shelf from "./Shelf";
import SearchBar from "./SearchBar";
import PropTypes from 'prop-types';

const Search = (props) => {
    return (
        <div>
            <SearchBar
                handleSearch={props.handleSearch}
                searchReturnedError={props.searchReturnedError}
                errorMessageShouldShow={props.errorMessageShouldShow}
                closeErrorMessage={props.closeErrorMessage}
            />
            <Shelf
                books={props.searchResults}
                updateShelf={props.updateShelf}
            />
        </div>
    )
}

Search.propTypes = {
    handleSearch: PropTypes.func,
    searchReturnedError: PropTypes.bool,
    errorMessageShouldShow: PropTypes.bool,
    closeErrorMessage: PropTypes.func,
    searchResults: PropTypes.array,
    updateShelf: PropTypes.func
}

export default Search;
