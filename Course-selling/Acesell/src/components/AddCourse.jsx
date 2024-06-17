import { useState } from "react";
import axios from "axios";

// AddCourse.jsx
const AddCourse = ({ isNightMode }) => {
  // You can add state and form handling logic here
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Add New Course</h2>
      <form>
        <div className="mb-4">
          <label
            htmlFor="title"
            className={`block text-sm font-medium ${
              isNightMode ? "text-white" : "text-gray-700"
            }`}
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="mt-1 p-2 w-full border rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}

            // Add onChange and value for controlled input
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className={`block text-sm font-medium ${
              isNightMode ? "text-white" : "text-gray-700"
            }`}
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="3"
            className="mt-1 p-2 w-full border rounded-md"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            // Add onChange and value for controlled input
          ></textarea>
        </div>
        {/* Add fields for image, price, etc. */}
        <div className="mb-4">
          <label
            htmlFor=""
            className={`block text-sm font-medium ${
              isNightMode ? "text-white" : "text-gray-700"
            }`}
          >
            Image URL
          </label>
          <input
            type="file"
            id="image"
            name="image"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            // Add onChange and value for controlled input
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="price"
            className={`block text-sm font-medium ${
              isNightMode ? "text-white" : "text-gray-700"
            }`}
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={price}
            className="mt-1 p-2 w-full border rounded-md"
            // Add onChange and value for controlled input
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          onClick={async () => {
            await axios.post(
              "http://localhost:3000/admin/courses",
              {
                title: title,
                description: description,
                image: image,
                price: Number(price),
              },
              {
                headers: {
                  Authorization: "Bearer " + localStorage.getItem("token"),
                },
              }
            );
            alert("Course Added");
          }}
        >
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
