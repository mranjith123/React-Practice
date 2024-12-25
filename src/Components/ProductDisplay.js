import React, { useState } from "react";

const ProductDisplay = () => {
  const [products, setProducts] = useState([
    {
      name: "Apple IPAD",
      pic: "www.cloudshare.come/pic/apple-ipad",
      price: "999",
    },
    {
      name: "Xbox",
      pic: "www.cloudshare.come/pic/xbox",
      price: "499",
    },
    {
      name: "Bose Headphone",
      pic: "www.cloudshare.come/pic/bose-headphone",
      price: "249",
    },
  ]);
  // const [searchTerm,setSearchTerm]= useState('');

  // const fetchProducts =()=>{
  //     fetch('/api/products')
  //     .then(Response =>Response.json())
  //     .then(data=> setProducts(data))
  //     .catch(error =>console.error('Error for products:', error));
  // };

  const handleSearch = () => {
    // fetchProducts();
  };

  console.log("products:", products);

  return (
    <div>
      <input
        type="text"
        // value={searchTerm}
        // onChange ={(e) =>setSearch(e.target.value)}
      />
      <button onClick={handleSearch}> Search</button>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {products.map((product) => (
          <div
            key={product.name}
            style={{
              width: "30%",
              marginBottom: "20px",
              border: "1px solid #ccc",
              textAlign: "center",
            }}
          >
            <img src={product.pic} style={{ width: "100%", height: "auto" }} />
            <h3> product.name</h3>
            <p> price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const App = () => {};
export default ProductDisplay;
