import React, { useState,useMemo } from "react";
import './App.css'
function App() {
  const [height, setHeight] = useState(164);
  const [weight, setWeight] = useState(70);

  function onWeightChange(e) {
    setWeight(e.target.value);
  }
  function onHeightChange(e) {
    setHeight(e.target.value);
  }

  const output = useMemo(() => {
    const calculateheight = height / 100;
    return (weight / (calculateheight*calculateheight)).toFixed(1)
  },[weight,height])

  return (
    <main>
      <h1>BMI CALCULATOR</h1>
      <div className="input-section">
        <p className="slider-op">Weight:{weight}kg</p>
        <input
          type="range"
          className="input-slider"
          step="1"
          min="40"
          max="200"
          onChange={onWeightChange}
        />
        <p className="slider-op">Height:{height}cm</p>
        <input
          type="range"
          className="input-slider"
           min="140"
          max="250"
          onChange={onHeightChange}
        />
      </div>
      <div className="output-section">
        <p>Your BMI is</p>
        <p className="output">{output}</p>
      </div>
    </main>
  );
}

export default App;
