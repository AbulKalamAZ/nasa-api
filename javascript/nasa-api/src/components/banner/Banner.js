import React from 'react';
import './style.css'
import SearchBar from '../search-bar/SearchBar'
import Logo from '../logo/Logo'

const Banner = ()  => {
    return(
        <div className="banner">
            <header>
                <Logo />
            </header>
            <div className="search-box-container">
                <SearchBar />
            </div>
        </div>
    )
}

export default Banner;