import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  // effect
  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todos").then(async function (res) {
      const data = await res.json();
      setTodos(data.todos);
    });
  }, [todos]);
  return (
    <>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </>
  );
}

export default App;

const Todo = ({ title, description }) => {
  return (
    <>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </>
  );
};
