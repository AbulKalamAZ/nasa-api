import React, {useState, useRef} from 'react';
import "./style.css"

const SearchBar = () => {
    const searchBarInput = useRef(null);
    const [query, setQuery] = useState("");

    const handleUserQuery = (e) => {
        setQuery(e.target.value)
    } 
    const handleSendingQuery = (e) => {
        e.preventDefault();

        console.log(query);
        searchBarInput.current.value = ""
    } 
    return(
        <div className="search-bar">
            <form>
                <input
                    className="search-bar-input"
                    type="text"
                    onChange={handleUserQuery}
                    ref={searchBarInput}
                    placeholder="Looking for something .."
                />
                <select className="search-bar-select">
                    <option value="news">News</option>
                    <option value="image">Image</option>
                </select>
                <button
                    className="search-bar-button"
                    type="submit"
                    onClick={handleSendingQuery}
                >
                    Search
                </button>
            </form>
        </div>
    )
}


export default SearchBar;