import { useState } from "react";
import "./App.css";

function App() {
  // this causes ren renders in both the children componet
  const [name, setName] = useState("harish");

  const handleClick = () => {
    const randomValue = Math.random();
    setName(randomValue);
  };
  return (
    <>
      <button onClick={handleClick}>Click to update me</button>
      <Header name={name} /> <Header name="kran" />
    </>
  );
}

export default App;

function Header({ name }) {
  return <div>My name is {name}</div>;
}
