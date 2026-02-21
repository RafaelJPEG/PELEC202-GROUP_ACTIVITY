import React, { useState } from 'react'

function App() {

    const [number, setNumber] = useState(0)

    const increment = () => {
        setNumber(number + 1)
    }

    const decrement = () => {
        setNumber(number - 1)
    }

    const reset = () => {
        setNumber(0)
    }

    return ( 
        <div className="App" style={{ textAlign: "center" }}>

            <h1>Button Click Counter:</h1>
            <h2>{number}</h2>

            <button onClick={increment}>Add</button>
            <button onClick={decrement}>Sub</button>

            <div style={{ marginTop: "15px" }}>
                <button onClick={reset}>Reset</button>
            </div>

        </div>
    );
}

export default App;
