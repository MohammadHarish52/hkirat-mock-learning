import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      title: " wake up ",
      isCompleted: false,
    },
    {
      title: "study react",
      isCompleted: false,
    },
  ]);
  return (
    <>
      {todos.map((todo) => {
        return (
          <div key={todo.title}>
            <Todo title={todo.title} />
          </div>
        );
      })}
    </>
  );
}

function Todo({ title }) {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}

export default App;
