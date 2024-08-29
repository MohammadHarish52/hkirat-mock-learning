import React, { useState } from "react";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle todo creation here
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
      <input
        type="text"
        placeholder="Todo title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-4 p-2 bg-black border border-white rounded-md text-white placeholder-white placeholder-opacity-50 focus:outline-none focus:border-white focus:ring-1 focus:ring-white"
      />
      <textarea
        placeholder="Todo description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full mb-4 p-2 bg-black border border-white rounded-md text-white placeholder-white placeholder-opacity-50 focus:outline-none focus:border-white focus:ring-1 focus:ring-white"
      />
      <button
        type="submit"
        className="w-full p-2 bg-black text-white rounded-md hover:bg-zinc-800 border border-white transition-colors duration-300"
      >
        Add Todo
      </button>
    </form>
  );
};

export default CreateTodo;
