import React, { useState } from "react";
import '../App.css';


const Categories = () => {
  const initialProducts = [
    { id: 1, name: "Bajaj Steam Iron", category: "electronics", price: "1200", star: "4", src: "../assets/e1.webp" },
    { id: 2, name: "Logitech Mouse", category: "electronics", price: "200", star: "4.8", src: "../assets/e2.webp" },
    { id: 3, name: "JBL Earphones", category: "electronics", price: "100", star: "4.2", src: "../assets/e3.webp" },
    { id: 4, name: "Croma Microwave", category: "electronics", price: "1500", star: "4.4", src: "../assets/e4.webp" },
    { id: 5, name: "Vivo Y31 5G", category: "mobiles", price: "11500", star: "4.4", src: "../assets/m1.webp" },
    { id: 6, name: "OnePlus Never Settle", category: "mobiles", price: "15500", star: "4.2", src: "../assets/m2.webp" },
    { id: 7, name: "Vivo Y19", category: "mobiles", price: "10500", star: "4", src: "../assets/m3.webp" },
    { id: 8, name: "Google Pixel", category: "mobiles", price: "21500", star: "4.8", src: "../assets/m4.webp" },
    { id: 9, name: "Croma Washing Machine 9kg", category: "washing machines", price: "29500", star: "4.8", src: "../assets/w1.gif" },
    { id: 10, name: "Croma Washing Machine 8kg", category: "washing machines", price: "27500", star: "4.9", src: "../assets/w2.gif" },
    { id: 11, name: "LG Washing Machine 9kg", category: "washing machines", price: "29500", star: "4.8", src: "../assets/w3.webp"},
    { id: 12, name: "LG Washing Machine 8kg", category: "washing machines", price: "25500", star: "4.5", src: "../assets/w4.webp" }
  ];

  const [items, setItems] = useState(initialProducts);

  const filterItems = (cat) => {
    if (cat === "All") {
      setItems(initialProducts);
    } else {
      const filtered = initialProducts.filter(
        (item) => item.category === cat
      );
      setItems(filtered);
    }
  };

  return (
    <div className="container mt-5">
      <h4 className="my-4 text-center">Product Gallery</h4>

      {/* Filter Buttons */}
      <div className="text-center mb-4">
        <button className="btn btn-danger m-2" style={{fontFamily:'ui-serif',fontSize:'18px'}} onClick={() => filterItems("All")}>
          All
        </button>
        <button className="btn btn-success m-2" style={{fontFamily:'ui-serif',fontSize:'18px'}} onClick={() => filterItems("washing machines")}>
          Washing Machines
        </button>
        <button className="btn btn-success m-2" style={{fontFamily:'ui-serif',fontSize:'18px'}} onClick={() => filterItems("mobiles")}>
          Mobiles
        </button>
        <button className="btn btn-success m-2" style={{fontFamily:'ui-serif',fontSize:'18px'}} onClick={() => filterItems("electronics")}>
          Electronics
        </button>
      </div>

      <div className="row">
        {items.map((item) => (
          <div
            key={item.id}
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex"
          >
            <div className="card w-100 text-center shadow-sm h-100" >
              <img
                src={item.src}
                className="card-img-top p-3"
                alt={item.name}
                style={{ height: "160px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{fontFamily:'ui-serif'}}>{item.name}</h5>
                <p className="mb-1" style={{fontFamily:'ui-serif',fontSize:'18px'}}>Price: <span style={{fontFamily:'ui-serif', color:'red',fontSize:'20px'}}>₹{item.price}/-</span> </p>
                <p className="mb-0" style={{fontFamily:'ui-serif', fontSize:'18px'}}>
                  Rating: {item.star}
                  <img
                    src="../assets/star.svg"
                    alt="star"
                    height="16"
                    className="ms-1"
                  />
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
