import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos").then((res) => {
      res.json().then((data) => {
        setTodos(data);
      });
    });
  }, [todos]);

  return (
    <>
      {todos.map((todo) => {
        return (
          <div key={todo.title}>
            <Todo title={todo.title} description={todo.description} />
          </div>
        );
      })}
    </>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <button>Delete</button>
    </div>
  );
}

export default App;
