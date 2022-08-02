import Header from './Header'
import Main from './Main'
import '../styles/index.scss'
import { createContext, useRef, useState } from 'react'

function App() {
    const [number, setNumber] = useState('')
    const [colors, setColors] = useState([])
    const context = createContext()

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

    return (
        <div className="App">
            <context.Provider value={{ number, onChange, onClick }}>
                <Header context={context} />
                <Main colors={colors} />
            </context.Provider>
        </div>
    )
}

export default App
