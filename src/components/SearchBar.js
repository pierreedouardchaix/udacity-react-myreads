import React from 'react';
import {Link} from "react-router-dom";


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
        }
    }

    handleInputChange = (e) => {
        let query = e.target.value;
        this.setState({query: query});
        this.props.handleSearch(query);
    }

        closeErrorMessage = () => {
        this.setState({
            query: ''
        })
        this.props.closeErrorMessage();
    }


    render() {
        return (
            <div className="flex border-b-4 shadow-lg items-center w-full flex-grow">
                <Link to="/">
                    <div className="flex justify-center items-center h-20 w-20 ml-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                        </svg>
                    </div>
                </Link>
                <div className="flex w-full">
                    <input
                        className="placeholder-opacity-60 outline-none w-full"
                        type="text"
                        placeholder="Enter search terms here"
                        value={this.state.query}
                        onChange={(e) => this.handleInputChange(e)}
                    />
                </div>
                {this.props.searchReturnedError &&
                <div
                    className={"w-56 flex-none flex justify-center items-center bg-red-400 border-red-700 border-2 rounded-md mx-8 py-2 " + (this.props.errorMessageShouldShow ? "visible" : "invisible")}>
                    <div className="xl:font-light text-red-700 px-3 text-sm ">Search returned error</div>
                    <div onClick={this.closeErrorMessage} className={"cursor-pointer"}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                             fill="currentColor">
                            <path fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                  clipRule="evenodd"/>
                        </svg>
                    </div>
                </div>
                }

            </div>
        )
    }

}

export default SearchBar;
