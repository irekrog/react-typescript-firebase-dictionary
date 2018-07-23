import React from 'react';

interface ComponentProps {
    word: string;
    onsubmit: any;
    onchange: any;
}

const SearchWord = ({word, onsubmit, onchange}: ComponentProps) => {
    return (
        <div>
            <form onSubmit={onsubmit}>
                <label htmlFor="search-word">Search a word</label>
                <input type="search" id="search-word" onChange={onchange} />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchWord;