import React from "react";
import "../css/algorithm.css";
function DisplaySelectionAlgo() {
  return (
    <div className="display-algo">
      <div className="algo-desc">
        The selection sort algorithm sorts an array by repeatedly finding the
        minimum element (considering ascending order) from the unsorted part and
        putting it at the beginning. The algorithm maintains two subarrays in a
        given array. The subarray which already sorted. The remaining subarray
        was unsorted. In every iteration of the selection sort, the minimum
        element (considering ascending order) from the unsorted subarray is
        picked and moved to the sorted subarray.
        <div>
          <strong>Time Complexity:</strong> O(N2)
          <br />
          <strong>Auxiliary Space:</strong> O(1)
        </div>
      </div>
      <div className="algo">
        <h5>Follow the below steps to solve the problem:</h5>
        <ul>
          <li>Initialize minimum value(min_idx) to location 0.</li>
          <li>Traverse the array to find the minimum element in the array.</li>
          <li>If arr[i] &lt; min_idx then swap both the values.</li>
          <li>Increment min_idx to point to the next element.</li>
          <li>Repeat until the array is sorted.</li>
          <li>Print the sorted array</li>
        </ul>
      </div>
    </div>
  );
}

export default DisplaySelectionAlgo;
