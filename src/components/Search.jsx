import React, { useContext } from 'react'

function Search({ context }) {
    const { number, onChange, onClick } = useContext(context)

    return (
        <form>
            <input
                type="text"
                placeholder="Enter the number of colors that you want to generate"
                value={number}
                onInput={onChange}
            ></input>   
            <button type="button" onClick={onClick}>
                Generate
            </button>
        </form>
    )
}

export default Search
