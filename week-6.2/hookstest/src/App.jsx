import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [id, setId] = useState(0);

  const handleOnclick = (newId) => {
    setId(newId);
  };
  return (
    <div>
      <button onClick={() => handleOnclick(1)}>1</button>
      <button onClick={() => handleOnclick(2)}>2</button>
      <button onClick={() => handleOnclick(3)}>3</button>
      <button onClick={() => handleOnclick(4)}>4</button>
      <Todo id={id} />
    </div>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState(null);

  // implement effect here
  useEffect(() => {
    axios
      .get(`http://localhost:5000/todo?id=${id}`) // Ensure this URL is correct
      .then((response) => {
        setTodo(response.data.todo); // Set the todo data
      })
      .catch((error) => {
        console.error("Error fetching todo:", error);
      });
  }, [id]); // Add `id` to the dependency array

  // Render loading state until data is fetched
  if (!todo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{todo.title}</h1>
      <h4>{todo.description}</h4>
    </div>
  );
}

export default App;
