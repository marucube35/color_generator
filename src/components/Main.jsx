import React from 'react'

function Main({ colors, clipboard, onClick, onMouseLeave }) {
    return (
        <main>
            {colors.map((color, index) => {
                const style = { backgroundColor: color }
                return (
                    <div
                        className="color-card"
                        style={style}
                        key={index}
                        onMouseLeave={onMouseLeave}
                    >
                        <small>{color}</small>
                        <div
                            className={clipboard}
                            onClick={() => onClick(color)}
                        >
                            <i className="fas fa-clipboard "></i>
                        </div>
                    </div>
                )
            })}
        </main>
    )
}

export default Main
