import React from "react";
import "../css/algorithm.css";
function DisplayQuickAlgo() {
  return (
    <div className="display-algo">
      <div className="algo-desc">
        QuickSort is a Divide and Conquer algorithm. It picks an element as a
        pivot and partitions the given array around the picked pivot. The key
        process in quickSort is a partition(). The target of partition is, given
        an array and an element x of an array as the pivot, put x at its correct
        position in a sorted array and put all smaller elements (&lt; x) before
        x, and put all greater elements (&gt; x) after x. All this should be
        done in linear time.
        <div>
          <strong>Time Complexity:</strong> O(n*logn)
          <br />
          <strong>Auxiliary Space:</strong> O(n)
        </div>
      </div>
      <div className="algo">
        <h5>Follow the below steps to solve the problem:</h5>
        <ul>
          <li>
            An array is divided into subarrays by selecting a pivot element
            (element selected from the array).
          </li>
          <li>
            While dividing the array, the pivot element should be positioned in
            such a way that elements less than pivot are kept on the left side
            and elements greater than pivot are on the right side of the pivot.
          </li>
          <li>
            perform partitionFun(left, right, pivot) function
            <ol>
              <li>Choose the highest index value has pivot</li>
              <li>
                Take two variables to point left and right of the list excluding
                pivot. (left points to the low index and right points to the
                high)
              </li>
              <li>while value at left &lt; pivot move right</li>
              <li>while value at right &gt; pivot move left</li>
              <li>
                if both step 3 and step 4 does not match swap left and right
              </li>
              <li>if left ≥ right, the point where they met is new pivot</li>
            </ol>
          </li>
          <li>
            perform quickSort(l, r) function.
            <br />
            If r &gt; l
            <ul>
              <li>
                Make the right-most index value pivot
                <br />
                pivot = arr[r]
              </li>
              <li>
                partition the array using pivot value: <br />
                partition = partitionFun(l, r, pivot)
              </li>
              <li>
                quicksort left partition recursively:
                <br />
                quickSort(l,partition-1)
              </li>
              <li>
                quicksort right partition recursively
                <br />
                quickSort(partition+1,r)
              </li>
            </ul>
          </li>
          <li>Print the sorted array</li>
        </ul>
      </div>
    </div>
  );
}

export default DisplayQuickAlgo;
