import { useState } from "react";

const Counter = (props) => {
    const [counter, setCounter] = useState(0)

    const increase = () => {
        setCounter(count => count + 1)
    }

    const decrease = () => {
        setCounter(count => count - 1)
    }

    const reset = () => {
        setCounter(0)
    }



    return ( 
        <>
            {props.title}
            <br></br>
            <button onClick={increase}>Increase</button>
            <br></br>
            {counter}
            <br></br>
            <button onClick={decrease}>Decrease</button>
            <br></br>
            <button onClick={reset}>Reset</button>

        
        </>
     );
}
 
export default Counter;