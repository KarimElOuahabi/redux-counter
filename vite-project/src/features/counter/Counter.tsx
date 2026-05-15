import { useState } from "react";
import {
  increment,
  decrement,
  incrementByAmount,
  selectCount,
  incrementAsync,
  selectStatus,
} from "./counterSlice";
import { useSelector, useDispatch } from "react-redux";

export function Counter() {
  const count = useSelector(selectCount);
  const status = useSelector(selectStatus);
  const dispatch = useDispatch<any>();
  const [incrementAmount, setIncrementAmount] = useState("0");
  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <h2>Counter</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <p>Count: {count}</p>
      {status === "loading" && <p>Loading...</p>}
      <button onClick={() => dispatch(decrement())}>-</button>
      <div>
        <input
          type="number"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button onClick={() => dispatch(incrementByAmount(incrementValue))}>
          Add Amount
        </button>
        <button onClick={() => dispatch(incrementAsync(incrementValue))}>
          Add Async
        </button>
      </div>
    </div>
  );
}
