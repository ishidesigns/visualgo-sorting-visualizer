import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import DisplayBubbleAlgo from "./DisplayBubbleAlgo";
import "../css/algorithm.css";
import InputArray from "./InputArray";

function BubbleSort() {
  const [viewInput, setViewInput] = useState(false);
  const [viewArray, setViewArray] = useState(false);
  const [viewAlgo, setViewAlgo] = useState(false);
  const [arr, setArr] = useState([]);

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

  const array = (data) => {
    setArr(data);
  };

  const viewArrBool = (data) => {
    setViewArray(data);
  };
  return (
    <div className="main-div">
      <div className="header-div">
        <h3>Bubble Sort</h3>
      </div>
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
              <InputArray array={array} viewArr={viewArrBool} />
            </div>
          )}

          {/*display-Array */}
          {viewArray && (
            <section className="visualizer">
              {arr.map((element, index) => {
                if (Number.isInteger(parseInt(element)))
                  return (
                    <div key={index} className="array-element">
                      {parseInt(element)}
                    </div>
                  );
                else return null;
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
    </div>
  );
}

export default BubbleSort;
