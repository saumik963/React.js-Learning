import { useDispatch, useSelector } from "react-redux";
import { decrement, increaseByAmount, increment, reset } from "./counterSlice";

const CounterView = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch= useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <div className="counter-btn">

      <button onClick={()=>dispatch(increment())} >+</button>
      <button onClick={()=>dispatch(decrement())} >-</button>
      <button onClick={()=>dispatch(increaseByAmount(5))} >+5</button> 
      <button onClick={()=>dispatch(reset())} >Reset</button>
      </div>
    </div>
  );
};

export default CounterView;
