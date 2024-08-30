import React, { useState } from "react";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/todo", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          description: description,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Todo created:", data);
    } catch (error) {
      console.error("Error creating todo:", error);
    }
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
