import React from 'react'
import Search from './Search'

function Header({context}) {
    return (
        <header>
            <h1>Color Generator</h1>
            <p>Built with ReactJS</p>
            <Search context={context}/>
        </header>
    )
}

export default Header
