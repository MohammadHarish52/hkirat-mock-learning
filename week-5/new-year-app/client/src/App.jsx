import React, { useEffect, useState } from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("http://localhost:3000/todos");
        if (!response.ok) {
          throw new Error("Failed to fetch todos");
        }
        const data = await response.json();
        setTodos(data.todos);
      } catch (error) {
        console.error("Something went wrong", error.message);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTodos();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-start">
      <div className="container  px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Todo App</h1>
        <CreateTodo />
        {isLoading ? (
          <p className="text-center mt-8">Loading todos...</p>
        ) : error ? (
          <p className="text-center mt-8 text-white">{error}</p>
        ) : (
          <Todos todos={todos} />
        )}
      </div>
    </div>
  );
}

export default App;
