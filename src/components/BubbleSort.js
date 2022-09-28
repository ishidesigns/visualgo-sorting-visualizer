import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import DisplayBubbleAlgo from "./DisplayBubbleAlgo";
import "../css/displayAlgo.css";

function BubbleSort() {
  const [viewInput, setViewInput] = useState(false);
  const [input, setInput] = useState("");
  const [viewArray, setViewArray] = useState(false);
  const [viewAlgo, setViewAlgo] = useState(false);
  const [arr, setArr] = useState([]);

  const generateArr = (input) => {
    setArr(
      input
        .trim()
        .split(",")
        .map((item) => {
          if (item) return parseInt(item, 10);
        })
    );
  };

  const handleDisplayAlgo = () => {
    setViewAlgo(!viewAlgo);
    let view_hide_algo = document.getElementById("view-algo");
    if (view_hide_algo.value === "Hide Algorithm") {
      view_hide_algo.value = "View Algorithm";
      view_hide_algo.innerHTML = "View Algorithm";
    } else {
      view_hide_algo.value = "Hide Algorithm";
      view_hide_algo.innerHTML = "Hide Algorithm";
    }
  };

  const bubbleSort = () => {
    setTimeout(() => {
      let newArray = document.getElementsByClassName("array-element");
      const n = newArray.length;
      for (let i = 0; i < n - 1; i++) {
        setTimeout(() => {
          for (let j = 0; j < n - i - 1; j++) {
            if (
              parseInt(newArray[j].innerText) >
              parseInt(newArray[j + 1].innerText)
            ) {
              newArray[j].style.backgroundColor = "pink";
              newArray[j + 1].style.backgroundColor = "pink";

              console.log(newArray[i].innerText, newArray[j].innerText);
              let temp = parseInt(newArray[j].innerText);
              newArray[j].innerText = parseInt(newArray[j + 1].innerText);
              newArray[j + 1].innerText = temp;
              let newArr = [];
              for (let k = 0; k < newArray.length; k++)
                newArr.push(newArray[k].innerText);

              console.log(newArr);
              setTimeout(() => {
                setArr([...newArr]);
                newArray[j].style.backgroundColor = "rgb(212, 212, 212)";
                newArray[j + 1].style.backgroundColor = "rgb(212, 212, 212)";
              }, j * 500);
            }
          }
        }, i * 2000);
      }
    }, 2000);
  };

  return (
    <div className="bubble-sort">
      <section className="left">
        <header className="header-btn">
          <Button
            variant="primary"
            type="submit"
            className="header-button"
            onClick={() => setViewInput(true)}
          >
            Create Array
          </Button>
          <Button
            variant="primary"
            type="submit"
            className="header-button"
            onClick={() => bubbleSort()}
          >
            Sort Array
          </Button>
        </header>
        {/* Input */}
        {viewInput && (
          <div className="input-array">
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon3">
                Enter comma-separated array elements
              </InputGroup.Text>
              <Form.Control
                id="basic-url"
                aria-describedby="basic-addon3"
                placeholder="Enter elements"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  setViewArray(false);
                }}
              />
              <Button
                variant="primary"
                type="submit"
                className="view-algo"
                onClick={() => {
                  console.log(arr);
                  setViewArray(true);
                  generateArr(input);
                }}
              >
                Go
              </Button>
            </InputGroup>
          </div>
        )}

        {/*display-Array */}
        {viewArray && (
          <section className="displayArr">
            {arr.map((element, index) => {
              if (Number.isInteger(parseInt(element)))
                return (
                  <div key={index} className="array-element">
                    {parseInt(element)}
                  </div>
                );
            })}
          </section>
        )}
      </section>

      <section className="right">
        <div>
          <Button
            variant="primary"
            type="submit"
            id="view-algo"
            onClick={() => handleDisplayAlgo()}
          >
            View Algorithm
          </Button>
        </div>
        <div className="">{viewAlgo && <DisplayBubbleAlgo />}</div>
      </section>
    </div>
  );
}

export default BubbleSort;
