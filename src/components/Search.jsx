import React from 'react'

function Search() {
    return (
        <form>
            <input
                type="text"
                placeholder="Enter the number of colors that you want to generate"
            ></input>
            <button type="button">Generate</button>
        </form>
    )
}

export default Search
