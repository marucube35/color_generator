import React from 'react'

function Header({ number, onChange, onClick }) {

    return (
        <header>
            <h1>Color Generator</h1>
            <p>Built with ReactJS</p>
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
        </header>
    )
}

export default Header
