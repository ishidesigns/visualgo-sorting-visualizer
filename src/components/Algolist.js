import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../css/homePage.css";

function Algolist() {
  return (
    <div className="main-container">
      <Link className="algo-links" to="/Bubble-Sort">
        <div className="cards">
          <Card className="card">
            <Card.Img
              className="card-img"
              variant="top"
              src={require("../Images/bubble-sort.gif")}
            />
            <Card.Body className="card-body">
              <Card.Title className="card-title">Bubble Sort</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </Link>

      <Link className="algo-links" to="/Selection-Sort">
        <div className="cards">
          <Card className="card">
            <Card.Img
              className="card-img"
              variant="top"
              src={require("../Images/selection-sort.gif")}
            />
            <Card.Body className="card-body">
              <Card.Title className="card-title">Selection Sort</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </Link>

      <Link className="algo-links" to="/Insertion-Sort">
        <div className="cards">
          <Card className="card">
            <Card.Img
              className="card-img"
              variant="top"
              src={require("../Images/insertion-sort.gif")}
            />
            <Card.Body className="card-body">
              <Card.Title className="card-title">Insertion Sort</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </Link>

      <Link className="algo-links" to="/Merge-Sort">
        <div className="cards">
          <Card className="card">
            <Card.Img
              className="card-img"
              variant="top"
              src={require("../Images/merge-sort.gif")}
            />
            <Card.Body className="card-body">
              <Card.Title className="card-title">Merge Sort</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </Link>

      <Link className="algo-links" to="/Quick-Sort">
        <div className="cards">
          <Card className="card">
            <Card.Img
              className="card-img"
              variant="top"
              src={require("../Images/quick-sort.gif")}
            />
            <Card.Body className="card-body">
              <Card.Title className="card-title">Quick Sort</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </Link>
    </div>
  );
}

export default Algolist;
