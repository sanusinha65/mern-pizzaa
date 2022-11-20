import React from "react";

export default function Pizza({ pizza }) {
  return (
    <div>
      <h1>{pizza.name}</h1>
      <img
        src={pizza.image}
        alt={pizza.name}
        className="img-fluid"
        style={{ width: "200px", height: "200px" }}
      />
      <div className="container">
        <div className="w-100">
          <p>Varients</p>
        </div>

        <div>Prices</div>
      </div>
    </div>
  );
}
