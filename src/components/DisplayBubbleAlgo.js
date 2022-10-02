import React from "react";
import "../css/algorithm.css";
function DisplayBubbleAlgo() {
  return (
    <div className="display-algo">
      <div className="algo-desc">
        Bubble Sort is the simplest sorting algorithm that works by repeatedly
        swapping the adjacent elements if they are in the wrong order. This
        algorithm is not suitable for large data sets as its average and
        worst-case time complexity is quite high.
        <div>
          <strong>Time Complexity:</strong> O(N2)
          <br />
          <strong>Auxiliary Space:</strong> O(1)
        </div>
      </div>
      <div className="algo">
        <h5>Follow the below steps to solve the problem:</h5>
        <ul>
          <li>
            Run a nested for loop to traverse the input array using two
            variables i and j, such that 0 &lt;= i &lt; n-1 and 0 &lt;= j &lt;
            n-i-1{" "}
          </li>
          <li>
            If arr[j] &gt; arr[j+1] then swap these adjacent elements, else move
            on
          </li>
          <li>Print the sorted array</li>
        </ul>
      </div>
    </div>
  );
}

export default DisplayBubbleAlgo;
