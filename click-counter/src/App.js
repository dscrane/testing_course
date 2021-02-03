import {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  let display;
  if (count < 0) {
    display = 'Counter cannot go below zero'
  } else {
    display = (
      <>
        The counter is currently&nbsp;
        <span data-test='count'>{count}</span>
      </>
    )
  }

  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">
        {display}
      </h1>
      <button data-test='increment-button' onClick={() => setCount(count + 1)}>Increment counter</button>
      <button data-test='decrement-button' onClick={() => setCount(count - 1)}>Decrement counter</button>
    </div>
  );
}

export default App;
