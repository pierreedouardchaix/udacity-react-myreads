import React from 'react';
import Shelf from "./Shelf";
import SearchBar from "./SearchBar";


class Search extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <SearchBar
                    handleSearch={this.props.handleSearch}
                    searchReturnedError={this.props.searchReturnedError}
                    errorMessageShouldShow={this.props.errorMessageShouldShow}
                    closeErrorMessage={this.props.closeErrorMessage}
                />
                <Shelf
                    books={this.props.searchResults}
                    updateShelf={this.props.updateShelf}
                />
            </div>
        )
    }
}

export default Search;
