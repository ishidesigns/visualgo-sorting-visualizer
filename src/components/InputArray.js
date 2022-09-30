import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function InputArray(props) {
  const [input, setInput] = useState("");
  const [viewArray, setViewArray] = useState(false);
  const [arr, setArr] = useState([]);

  const generateArr = (input) => {
    setArr(
      input
        .trim()
        .split(",")
        .map((item) => {
          if (item) return parseInt(item, 10);
          else return null;
        })
    );
    console.log(input);
    console.log(arr);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
    setViewArray(!viewArray);
  };

  useEffect(() => {
    props.array(arr);
  }, [arr]);

  useEffect(() => {
    props.viewArr(viewArray);
    generateArr(input);
  }, [input]);

  return (
    <div className="input-array-container">
      <div className="input-array">
        <InputGroup className="mb-3 ip-arr">
          <InputGroup.Text id="basic-addon3" className="ip-arr-text">
            Enter comma-separated array elements
          </InputGroup.Text>
          <Form.Control
            id="basic-url"
            className="header-button"
            aria-describedby="basic-addon3"
            placeholder="Enter elements"
            value={input}
            onChange={handleInput}
          />
        </InputGroup>
      </div>
    </div>
  );
}

export default InputArray;
