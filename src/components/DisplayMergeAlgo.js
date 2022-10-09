import React from "react";
import "../css/algorithm.css";
function DisplayMergeAlgo() {
  return (
    <div className="display-algo">
      <div className="algo-desc">
        Merge sort is the sorting technique that follows the divide and conquer
        approach. It is one of the most popular and efficient sorting algorithm.
        It divides the given list into two equal halves, calls itself for the
        two halves and then merges the two sorted halves. We have to define the
        merge() function to perform the merging. The sub-lists are divided again
        and again into halves until the list cannot be divided further. Then we
        combine the pair of one element lists into two-element lists, sorting
        them in the process. The sorted two-element pairs is merged into the
        four-element lists, and so on until we get the sorted list.
        <div>
          <strong>Time Complexity:</strong> O(n*logn)
          <br />
          <strong>Auxiliary Space:</strong> O(n)
        </div>
      </div>
      <div className="algo">
        <h5>Follow the below steps to solve the problem:</h5>
        <ul>
          <li>declare array and left, right, mid variable.</li>
          <li>
            perform merge function.
            <br />
            if left &gt; right
            <br />
            return
            <br />
            mid= (left+right)/2
            <br />
            mergesort(array, left, mid)
            <br />
            mergesort(array, mid+1, right)
            <br />
            merge(array, left, mid, right)
          </li>
          <li>
            perform mergeSort(arr[], l, r) function.
            <br />
            If r &gt; l
            <ul>
              <li>
                Find the middle point to divide the array into two halves:{" "}
                <br />
                middle m = l + (r – l)/2
              </li>
              <li>
                Call mergeSort for first half: <br />
                mergeSort(arr, l, m)
              </li>
              <li>
                Call mergeSort for second half:
                <br />
                mergeSort(arr, m + 1, r)
              </li>
              <li>
                Merge the two halves sorted in steps 2 and 3:
                <br />
                merge(arr, l, m, r)
              </li>
            </ul>
          </li>
          <li>Print the sorted array</li>
        </ul>
      </div>
    </div>
  );
}

export default DisplayMergeAlgo;
