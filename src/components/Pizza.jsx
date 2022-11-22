import { Button } from "bootstrap";
import React, {useState} from "react";
import {Modal} from 'react-bootstrap';

export default function Pizza({ pizza }) {
  const [quantity, setquantity]= useState(1);
  const [varients, setvarients]= useState("small");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="shadow-lg p-3 mb-5 bg-white rounded" style={{marginLeft: "30px", padding: "1%", borderRadius: "20px", border: "1px solid whitesmoke"}}>

<div onClick={handleShow}>
      <h1>{pizza.name}</h1>
      <img
        src={pizza.image}
        alt={pizza.name}
        className="img-fluid"
        style={{ width: "200px", height: "200px" }}
      />
      </div>
      <div className="container">
        <div className="w-100">
          <p>Varients</p>
          <select value={varients} onChange={(e)=>{setvarients(e.target.value)}} style={{ textTransform: "capitalize" }}>
            {pizza.varients.map((varient) => {
              return (
                <option value={varient} style={{ textTransform: "capitalize" }}>
                  {varient}
                </option>
              );
            })}
          </select>
          
        </div>
        <div>
          <p> Quantity</p>
<select value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
  {[...Array(10).keys()].map((x, i)=>{
    return (
      <option value={i+1} style={{ textTransform: "capitalize" }}>
        {i+1}
      </option>
    );

  })}
        </select>
        </div> 
        </div>
        <div className="container"> 
        <div>
        <h1>Prices: {pizza.prices[0][varients] * [quantity]}</h1>
        </div>
        <div>
          <button className="btn btn-success ">Add To Cart</button>
        </div>
         </div>

      <Modal show={show}>
      <Modal.Header closeButton onClick={handleClose}>
        <Modal.Title>{pizza.name}</Modal.Title>
      </Modal.Header>

      <Modal.Body style={{display: "grid", justifyItems: "center"}}>
        <img src={pizza.image} alt={pizza.name} />
        <p>{pizza.description}</p>
      </Modal.Body>

      <Modal.Footer>
        <button className="btn btn-secondary mt-0" onClick={handleClose}>Close</button>
      </Modal.Footer>
    </Modal>
      </div>
  );
}
