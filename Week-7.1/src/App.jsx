import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Count count={count} setCount={setCount} />
    </>
  );
}

function Count({ count, setCount }) {
  return (
    <>
      {count}
      <Button setCount={setCount} />
    </>
  );
}

function Button({ setCount }) {
  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        Increase Count
      </button>
      <button onClick={() => setCount((count) => count - 1)}>
        Decrease Count
      </button>
    </>
  );
}

export default App;
