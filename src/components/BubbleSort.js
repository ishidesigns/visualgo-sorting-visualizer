import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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

  const bs = () => {
    const myState = useSelector((state) => state.updateProps);
    const dispatch = useDispatch();

    let values = myState.values.map((item) => item[0]);
    let ids = myState.values.map((item) => item[1]);

    const solve = () => {
      for (let i = values.length, timer = 0; i > 0; timer += i - 1, i--) {
        setTimeout(() => {
          for (let j = 1; j < i; j++) {
            setTimeout(() => {
              document.getElementById(
                ids[j]
              ).childNodes[1].style.backgroundColor = "black";
              document.getElementById(
                ids[j - 1]
              ).childNodes[1].style.backgroundColor = "black";

              setTimeout(() => {
                document.getElementById(
                  ids[j]
                ).childNodes[1].style.backgroundColor = myState.color;
                document.getElementById(
                  ids[j - 1]
                ).childNodes[1].style.backgroundColor = myState.color;
              }, myState.speed - 10);

              if (values[j] < values[j - 1]) {
                let temp = values[j];
                values[j] = values[j - 1];
                values[j - 1] = temp;

                temp = ids[j];
                ids[j] = ids[j - 1];
                ids[j - 1] = temp;

                document.getElementById(ids[j]).style.transform = `translateX(${
                  j * 11
                }px)`;

                document.getElementById(
                  ids[j - 1]
                ).style.transform = `translateX(${(j - 1) * 11}px)`;
              }
            }, (j - 1) * myState.speed);
          }
        }, timer * myState.speed);
      }

      setTimeout(() => {
        dispatch({
          type: "PLAY_PAUSE",
          _play: false,
        });

        dispatch({
          type: "UPDATE_COLOR",
          color: "rgb(0, 182, 0)",
        });
      }, (((myState.values.length - 1) * myState.values.length) / 2) * myState.speed + 50);
    };

    useEffect(() => {
      if (myState.algorithm === "bubble") {
        if (myState.play) solve();
      }
    }, [myState.play]);

    return <></>;
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
