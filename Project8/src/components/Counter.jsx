import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from '../Services/Actions/CounterAction';


function Counter() {
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(incrementCounter())
  };

  const handleDecrement=()=>{
    dispatch(decrementCounter())
  }
  const handleReset=()=>{
    dispatch(resetCounter())
  }

  return (
    <div>
      <h2>Counter App</h2>
      <h2>Count : {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;
