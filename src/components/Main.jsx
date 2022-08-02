import React from 'react'

function Main({ colors }) {
    return (
        <main>
            {colors.map((color, index) => {
                const style = { backgroundColor: color }
                return (
                    <div style={style} key={index}>
                        <small>{color}</small>
                        <i className="fas fa-clipboard"></i>
                    </div>
                )
            })}
        </main>
    )
}

export default Main
