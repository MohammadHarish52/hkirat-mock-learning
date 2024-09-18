import { useMemo, useState } from "react";

const App = () => {
  // problem is across render sum is calculated
  // again and again which shouldnt happen
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  // compute when it changes only

  let sum = useMemo(() => {
    let finalsum = 0;
    for (let i = 0; i <= number; i++) {
      finalsum = finalsum + i;
    }
    return finalsum;
  }, [number]);

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
