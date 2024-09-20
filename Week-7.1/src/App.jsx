import { useContext, useState } from "react";
import "./App.css";
import { CountContext } from "./components/CountContext";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <CountContext.Provider value={count}>
        <Count setCount={setCount} />
      </CountContext.Provider>
    </>
  );
}

function Count({ setCount }) {
  return (
    <>
      <CountRenderer />
      <Button setCount={setCount} />
    </>
  );
}

function CountRenderer() {
  const count = useContext(CountContext);
  return <div>{count}</div>;
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
