import {
  increment,
  decrement,
  incrementByN,
} from "../store/counter/counterActions";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const [num, setNum] = useState(0);

  const handleChange = (e) => {
    console.log(e.target.value);
    setNum(+e.target.value);
  };

  return (
    <div>
      <h1>{counter.count}</h1>
      <button onClick={() => dispatch(increment())}>inc</button>
      <button onClick={() => dispatch(decrement())}>decr</button>
      <hr />
      <input type="number" onChange={handleChange} />
      <button onClick={() => dispatch(incrementByN(num))}>increment by</button>
    </div>
  );
};

export default Counter;
