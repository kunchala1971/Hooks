import React, { useDeferredValue,  useState } from "react";

const ProductsList = ({ products }) => {
  const [search, setSearch] = useState("");
  const defferedSearch = useDeferredValue(search);
    console.log("Search:", search);
    console.log("Deffered Valeu:", defferedSearch);
    const filterProducts = products.filter((product) =>
        product.toLowerCase().includes(defferedSearch.toLowerCase())
      );

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filterProducts.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
