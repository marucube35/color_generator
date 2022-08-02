import React from 'react'

const LIGHT_LIMIT = 13421772

function generateColorStyle(colorString) {
    const decimalValue = parseInt(colorString.slice(1), 16)

    return {
        color: decimalValue > LIGHT_LIMIT ? '#000' : '#fff',
        backgroundColor: colorString
    }
}

function Main({ colors, clipboard, copyClick, resetClipboard }) {
    return (
        <main>
            {colors.map((color, index) => {
                const style = generateColorStyle(color)

                return (
                    <div
                        className="color-card"
                        style={style}
                        key={index}
                        onMouseLeave={resetClipboard}
                    >
                        <small>{color}</small>
                        <div
                            className={clipboard}
                            onClick={() => copyClick(color)}
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
