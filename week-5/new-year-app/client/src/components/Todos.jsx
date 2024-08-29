import React from "react";

const Todos = ({ todos }) => {
  if (!todos || todos.length === 0) {
    return (
      <div className="text-center text-white mt-8">
        No todos yet. Start by creating one!
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-8">
      {todos.map((todo) => (
        <div
          key={todo._id}
          className="bg-black border border-white rounded-lg mb-4 p-4 transition-all hover:bg-zinc-800 hover:text-white"
        >
          <h2 className="text-xl font-semibold mb-2">{todo.title}</h2>
          <p className="mb-4">{todo.description}</p>
          <button className="bg-black text-white rounded-md hover:bg-zinc-800 py-2 px-4   border border-white transition-colors duration-300">
            Mark as Completed
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todos;
