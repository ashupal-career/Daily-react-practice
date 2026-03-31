import React, { useState, useCallback } from "react";

const Child = ({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click Me</button>;
};

function App() {
  const [count, setCount] = useState(0);

  // useCallback to memoize function
  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <Child onClick={handleClick} />
    </div>
  );
}

export default App;