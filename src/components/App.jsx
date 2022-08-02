import Header from './Header'
import Main from './Main'
import '../styles/index.scss'
import { useState } from 'react'

function App() {
    const [number, setNumber] = useState('')
    const [colors, setColors] = useState([])
    const [clipboard, setClipboard] = useState('copy')

    function onChange(e) {
        const value = e.target.value
        if (isNumber(value)) {
            setNumber(value)
        }
    }
    function isNumber(value) {
        const pattern = /^[0-9]+$/g
        return value === '' || pattern.test(value)
    }

    function onClick() {
        const randomColors = generateColors(number)
        setColors(randomColors)
    }
    function generateColors(number) {
        const colors = []
        for (let i = 1; i <= number; i++) {
            colors.push(randomColor())
        }
        return colors
    }
    function randomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16)
    }

    function copyClick(color) {
        if (clipboard === 'copy') {
            setClipboard('copied')
            copy(color)
        }
    }
    function resetClipboard() {
        setClipboard('copy')
    }
    function copy(text) {
        navigator.clipboard.writeText(text)
    }

    return (
        <div className="App">
            <Header number={number} onChange={onChange} onClick={onClick} />
            <Main
                colors={colors}
                clipboard={clipboard}
                onClick={copyClick}
                onMouseLeave={resetClipboard}
            />
        </div>
    )
}

export default App
