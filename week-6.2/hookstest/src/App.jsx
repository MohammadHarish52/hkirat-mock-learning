import React, { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  let sum = 0;

  for (let i = 0; i <= number; i++) {
    sum = i + sum;
  }
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <h1>Sum is {sum}</h1>

      <button value={count} onClick={() => setCount((e) => e + 1)}>
        count is ({count})
      </button>
    </div>
  );
};

export default App;
