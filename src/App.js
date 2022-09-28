import "./App.css";
import "./css/Header.css";
import Algolist from "./components/Algolist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BubbleSort from "./components/BubbleSort";
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
