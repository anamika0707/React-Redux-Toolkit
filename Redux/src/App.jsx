import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import './App.css'
import {decrement,increment,reset, incrementByAmount} from './features/counterSlice';

function App() {
  const [amount,setAmount]=useState(0);
  const count=useSelector((state)=>state.counter.value); //agr hum store mein se koi data ya state nikalna chahte hai to hume useSelector hook  ka use kerte hai yaha counter is the name of slice and value name of entity it is all contained in counterSlice.js
 
  //agr hume koi action ko execute karana hota hai to use dispatch kerna hoga which is done by using useDispatch hook
  const dispatch=useDispatch();
  function handleIncrementClick(){
    dispatch(increment());
  }
  function handleResetClick(){
    dispatch(reset());
  }
  function handleDecrementClick(){
    dispatch(decrement());
  }
    function handleIncAmountClick(){
    dispatch( incrementByAmount(amount));
}
  return (
   <div className='container'>
    <button onClick={handleIncrementClick}>+</button>
    <p>Count:{count}</p>
    <button onClick={handleDecrementClick}>-</button>
    <br></br> <br></br>
    <button onClick={handleResetClick}>Reset</button>
       <br></br> <br></br>
       <input type='Number' value={amount} placeholder="Enter Amount" onChange={(e)=>setAmount(e.target.value)}></input>
       <br></br> <br></br>
    <button onClick={handleIncAmountClick}>Increment by amount</button>
   </div>
  )
}

export default App
