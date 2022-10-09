import React from "react";
import "../css/algorithm.css";
function DisplayInsertionAlgo() {
  return (
    <div className="display-algo">
      <div className="algo-desc">
        Insertion sort is a simple sorting algorithm that works similar to the
        way you sort playing cards in your hands. The array is virtually split
        into a sorted and an unsorted part. Values from the unsorted part are
        picked and placed at the correct position in the sorted part. The idea
        behind the insertion sort is that first take one element, iterate it
        through the sorted array.
        <div>
          <strong>Time Complexity:</strong> O(N2)
          <br />
          <strong>Auxiliary Space:</strong> O(1)
        </div>
      </div>
      <div className="algo">
        <h5>Follow the below steps to solve the problem:</h5>
        <ul>
          <li>Iterate from arr[1] to arr[N] over the array.</li>
          <li>Compare the current element (key) to its predecessor.</li>
          <li>
            If the key element &lt; its predecessor, compare it to the elements
            before. Move the greater elements one position up to make space for
            the swapped element.
          </li>
          <li>Print the sorted array</li>
        </ul>
      </div>
    </div>
  );
}

export default DisplayInsertionAlgo;
