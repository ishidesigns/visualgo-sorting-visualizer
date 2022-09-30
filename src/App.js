import "./App.css";
import "./css/Header.css";
import Algolist from "./components/Algolist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BubbleSort from "./components/BubbleSort";
import SelectionSort from "./components/SelectionSort";
import InsertionSort from "./components/InsertionSort";
import QuickSort from "./components/QuickSort";
import MergeSort from "./components/MergeSort";
import HeapSort from "./components/HeapSort";

function App() {
  return (
    <div className="">
      <div className="header">
        {" "}
        <h1 id="animateText">Sorting Visualizer</h1>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Algolist />} />
          <Route path="/Bubble-Sort" element={<BubbleSort />} />
          <Route path="/Selection-Sort" element={<SelectionSort />} />
          <Route path="/Insertion-Sort" element={<InsertionSort />} />
          <Route path="/Insertion-Sort" element={<QuickSort />} />
          <Route path="/Merge-Sort" element={<MergeSort />} />
          <Route path="/Heap-Sort" element={<HeapSort />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
