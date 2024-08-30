import { useState } from "react";
import "./App.css";

function App() {
  // fix moving the state down

  return (
    <>
      <HeaderTwo title="chick" />
      <Header />
    </>
  );
}

export default App;

function Header() {
  const [name, setName] = useState("harish");
  const handleClick = () => {
    const randomValue = Math.random();
    setName(randomValue);
  };
  return (
    <div>
      <button onClick={handleClick}>Click to update me</button>My name is {name}
    </div>
  );
}

function HeaderTwo({ title }) {
  return <div>My name is {title}</div>;
}
