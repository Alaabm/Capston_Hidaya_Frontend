import { useState } from "react";
// import "../styles/Dhikr.css";


const Counter = () => {
    const [count, setCount] = useState(0)
    

    let incrementCount = () => {
        setCount(prevCount => prevCount +1);
    };

    let decrementCount = () => {
        setCount(prevCount => (prevCount > 0 ? prevCount - 1:0 ));
       
    };

    let reset = () => {
        setCount(0);
      };


  return (
    <>
        <div className= "counter">
            <div>
                <h1>{count}</h1>
            </div>
            <div className = "buttons"
                style={{
                    
                }}
            >
                <button onClick={decrementCount}> - </button>
                <button onClick={incrementCount}> + </button>
                <div
                    style={{
                        paddingTop: '10px',
                    }}
                >
                    <button onClick={reset}> Reset </button>
                </div>
                

            </div>
        </div>
         
    </>
  )
}

export default Counter

//do something so counter doesnt go negative...