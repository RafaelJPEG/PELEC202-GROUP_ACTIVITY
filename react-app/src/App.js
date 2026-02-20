import React, {useState} from 'react'

function App() {
    
    const [number, setNumber] = useState(0)
    
    const increment = () => {
        setNumber(number + 1)
    }

    const decrement= () => {
        setNumber(number -1)
    }

    return ( 
        <div className="App">

                <h1>{number}</h1>
                <button  onClick={increment}>Add</button>
        <button  onClick={decrement}>Sub</button>
        </div>
    );
}

export default App;
