import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByInput } from "./store/slices/counterSlices";
import { push, pop, clearStack } from "./store/slices/stackSlice";
import { useState } from "react";

export const App = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);
  const stack = useSelector((state) => state.stack.items)
  const [inputValueCount, setInputValueCount] = useState("")
  const [inputValueStack, setInputValueStack] = useState("")

  //Counter Handles
  const handleClickInc = () => {
    dispatch(increment())
  };
  const handleClickDec = () => {
    dispatch(decrement());
  };
  const handleClickIncByValue = () => {
    const value = Number(inputValueCount);
    if (!isNaN(value) && value !== 0) {
      dispatch(incrementByInput(value));
      setInputValueCount("");
    };
  };

  //Stack Handles
  const handleClickPush = () => {
    if (inputValueStack.trim() !== "") {
      dispatch(push(inputValueStack))
      setInputValueStack("")
    }
  }
  const handleClickPop = () => {
    if (stack.length > 0) {
      dispatch(pop())
    }
  }
  const handleClickClearStack = () => {
    if (stack.length > 0) {
      dispatch(clearStack())
    }
  }

  return (
    <>
      <p> Counter is: {count}</p>
      <button onClick={handleClickInc}>
        Increment
      </button>
      <button onClick={handleClickDec}>
        Decrement
      </button>
      <input
        type="number"
        value={inputValueCount}
        onChange={(e) => setInputValueCount(e.target.value)}
        placeholder="Ingrese un valor"
      />
      <button onClick={handleClickIncByValue}>
        Increment By Value
      </button>
      <br />
      <br />

      <input
        type="text"
        value={inputValueStack}
        onChange={(e) => setInputValueStack(e.target.value)}
        placeholder="Elemento a agregar" />
      <button onClick={handleClickPush}>
        Stack
      </button>
      <button onClick={handleClickPop} disabled={stack.length === 0}>
        Pop
      </button>
      <button onClick={handleClickClearStack} disabled={stack.length === 0}>
        Clear Stack
      </button>
      <h2>Elements Stack:</h2>
      <ul>
        {stack.slice().map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  )
}