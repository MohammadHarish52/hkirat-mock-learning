import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://sum-server.100xdevs.com/todos");
        const result = await response.json(); // Await response.json() to resolve the promise
        setData(result); // Store the fetched data in state
      } catch (e) {
        console.log("Error fetching data:", e.message);
      }
    };

    fetchData();
  }, []); // Add an empty dependency array to run only on mount

  return (
    <div>
      {data.length > 0 ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p> // Show a loading message while data is being fetched
      )}
    </div>
  );
};

export default App;
