import { useState } from 'react';
import './App.css'

function CounterApp(props) {
  const [counter, SetCounter] = useState(props.value);

  const handleSubstract = () => {
    SetCounter(counter - 1)
  };
  const HandleReset = () => {
    SetCounter(props.value)
  }

  return (
    <>
      <div>
        <h1>{props.title}</h1>
        <span>{counter}</span>
      </div>
      <button onClick={handleSubstract}>
        Handle Substract
      </button>
      <button onClick={HandleReset}>
        Handle Reset
      </button>
    </>
  )
}

export default CounterApp;
