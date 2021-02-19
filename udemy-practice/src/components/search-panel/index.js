import React from 'react';
import '../css/search-panel.css'

const SearchPanel = () => {
    return (
        <input
            className="form-control search-control"
            type="text"
            placeholder="Search"
        ></input>
    )
}

export default SearchPanel