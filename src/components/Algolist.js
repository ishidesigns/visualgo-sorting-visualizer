import React from "react";
import BubbleSort from "./BubbleSort";
import Card from 'react-bootstrap/Card';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 

// import bubblesort  from '../Images/bubble-sort.gif';
function Algolist() {
  return (
    <div className="main-container">
    <Link to='/Bubble-Sort'>
    <div className="cards">
    <Card style={{ width: "20rem" }}>
      <Card.Img
        variant="top"
        src={require("../Images/bubble-sort.gif")}
        style={{ width: "90%", margin:'auto', marginTop:'10px' }}
      />
      <Card.Body>
        <Card.Title style={{ textAlign:'center'}}>BubbleSort</Card.Title>
      </Card.Body>
    </Card>
    </div>
    </Link>
    </div>
  );
}

export default Algolist;
