import React, { useEffect, useState, useTransition } from "react";

const UseTransitionHook = () => {
  const [searchinput, setSearchInput] = useState("");
  const [filterdata, setFilterData] = useState([]);
  const [isPending, startTransition] = useTransition();
  const colors = ["Red", "Green", "Black", "Purple", "White", "Yellow"];
  useEffect(() => {
    setFilterData(colors);
  }, []);
  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    startTransition(() => {
      const filtered = colors.filter((color) =>
        color.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilterData(filtered);
    });
  };
  return (
    <div>
      <input type="text" value={searchinput} onChange={handleSearch} />
      {!isPending && (
        <ul>
          {filterdata.map((color, index) => (
            <li key={index}>{color}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UseTransitionHook;
