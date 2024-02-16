import { useState } from "react";
// import "../styles/Dhikr.css";



const Counter = () => {
    const [count, setCount] = useState(0)
    

    let incrementCount = () => {
        setCount(count +1);
    };

    let decrementCount = () => {
        setCount(count -1);
    };


  return (
    <>
        <div className= "counter">
            <div>
                <h1>{count}</h1>
            </div>
            <div className = "buttons">
                <button onClick={decrementCount}> - </button>
                <button onClick={incrementCount}> + </button>
            </div>
        </div>
         
    </>
  )
}

export default Counter

//do something so counter doesnt go negative...