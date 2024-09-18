import { memo, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  function onClick() {
    console.log("child clicked");
  }
  return (
    <div>
      <Child onClick={onClick} />
      <button onClick={() => setCount((e) => e + 1)}>{count} bdhao</button>
    </div>
  );
};

export default App;

const Child = memo(({ onClick }) => {
  console.log("button clicked");
  return (
    <div>
      <button onClick={onClick}>button clicked</button>
    </div>
  );
});
Child.displayName = "Child";
