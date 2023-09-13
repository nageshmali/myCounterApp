import './App.css';
import { useState } from 'react';

function App() {

  const [counter,setCounter] =  useState(0);

  const [msg,setMsg] =  useState('');

  const incCnt = () => {
    let newCount = counter + 1;
    setCounter(newCount);
    setMsg("");
  }

  const decCnt = () => {
    let newCount = 0;
    if(counter > 0){
      newCount = counter - 1;
    }
    else{
      setMsg("Cannot decrease below 0");
    }
    setCounter(newCount);
  }

  return (
    <>
      <h2>Hello, this is MyCounterApp, Click buttons to alter</h2>

      <h1>{counter}</h1>

      <button onClick={incCnt}>Increase</button>

      <button className='ml-4' onClick={decCnt}>Decrease</button>

      <h4 className='my-3'>{msg}</h4>
    </>
  )
}

export default App
