import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import DisplayQuickAlgo from "./DisplayQuickAlgo";
import "../css/algorithm.css";
import InputArray from "./InputArray";
import { quickSort } from "./SortingFunction";
import NavBar from "./NavBar";
function QuickSort() {
  const [viewInput, setViewInput] = useState(false);
  const [viewArray, setViewArray] = useState(false);
  const [viewAlgo, setViewAlgo] = useState(false);
  const [arr, setArr] = useState([]);
  const [newButton, setNewButton] = useState(false);
  const [isdisabled, setDisabled] = useState(false);
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

  const array = (data) => {
    setArr(data);
  };

  const viewArrBool = (data) => {
    setViewArray(data);
  };
  const createNewrray = (arr) => {
    setNewButton(true);
  };
  return (
    <React.Fragment>
      <NavBar />
      <div className="main-div">
        <div className="header-div">
          <h3>Quick Sort</h3>
        </div>

        <div className="bubble-sort">
          <section className="left">
            <header className="header-btn">
              <Button
                variant="primary"
                type="submit"
                className="header-button"
                id="create-array-btn"
                onClick={() => setViewInput(true)}
                disabled={isdisabled ? "disabled" : undefined}
              >
                Create Array
              </Button>
              <Button
                variant="primary"
                type="submit"
                id="sort-btn"
                className="header-button"
                onClick={async () => {
                  setDisabled(true);
                  // console.log(arr)
                  let ele = document.querySelectorAll(".array-element");
                  let l = 0;
                  let r = parseInt(ele.length) - 1;
                  await quickSort(ele, l, r);
                  createNewrray();
                  setDisabled(false);
                }}
                disabled={viewArray && !isdisabled ? undefined : "disabled"}
              >
                Sort Array
              </Button>
            </header>
            {/* Input */}
            {viewInput && (
              <div className="input-array">
                <InputArray
                  array={array}
                  viewArr={viewArrBool}
                  disable={isdisabled}
                />
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
            <br />
            {newButton && (
              <div id="new-array-btn">
                <Button
                  variant="primary"
                  type="submit"
                  onClick={() => {
                    setArr([]);
                    setNewButton(false);
                    setDisabled(false);
                    setViewArray(false);
                  }}
                >
                  Create New Array
                </Button>
              </div>
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
            <div className="">{viewAlgo && <DisplayQuickAlgo />}</div>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
}

export default QuickSort;
