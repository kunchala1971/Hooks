import React, { useEffect, useState } from "react";
import "./index.css";
const BASEURL = "https://jsonplaceholder.typicode.com/posts";
const UseEffectHook = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState(" ");
  useEffect(() => {
    const fetchData = () => {
      fetch(BASEURL)
        .then((response) => response.json())
        .then((data) => {
          setData(data.filter((user) => user.title.includes(input)));
        });
    };
    fetchData();
  }, [input]);
  return (
    <div>
      <h1>Filter Data</h1>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <ul className="column">
        {data.map((user) => (
          <div className="row">
            <li>{user.id}</li>
            <li>{user.title}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default UseEffectHook;
