import React from 'react';
import "./style.css"

const SearchBar = () => {
    return(
        <div className="search-bar">
            <input
                className="search-bar-input"
                type="text"
                placeholder="Looking for something .."
            />
        </div>
    )
}


export default SearchBar;