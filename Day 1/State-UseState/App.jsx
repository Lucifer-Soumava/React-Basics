// import { useState } from 'react';

function App() {
  // Add your state here
  const [count, setCount] = useState(0);

  function Increment (){
    setCount(count + 1);
  }
  
  function Decrement (){
    setCount(count - 1);
  }

  function Reset (){
    setCount(0)
  };
  
  return (
    <div>
      <h2 id="count">Count: {count}{/* display count */}</h2>
      {/* Add your buttons */}
      <button onClick={Increment} id="increment"> Increment </button>
      <button onClick={Decrement} id="decrement"> Decrement </button>
      <button onClick={Reset} id="reset"> reset </button>
    </div>
  );
}