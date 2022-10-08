import "./App.css";
import "./css/Header.css";
import Algolist from "./components/Algolist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BubbleSort from "./components/BubbleSort";
import SelectionSort from "./components/SelectionSort";
import InsertionSort from "./components/InsertionSort";
import QuickSort from "./components/QuickSort";
import MergeSort from "./components/MergeSort";

function App() {
  return (
    <div className="home">
      <div className="header">
        <h1 id="animateText">VISUALGO</h1>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Algolist />} />
          <Route path="/Bubble-Sort" element={<BubbleSort />} />
          <Route path="/Selection-Sort" element={<SelectionSort />} />
          <Route path="/Insertion-Sort" element={<InsertionSort />} />
          <Route path="/Quick-Sort" element={<QuickSort />} />
          <Route path="/Merge-Sort" element={<MergeSort />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
