import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState("");

  // Function to handle button clicks
  const handleClick = (value) => {
    setDisplay(display + value);
  };

  // Function to calculate the result
  const calculateResult = () => {
    try {
      // Using Function constructor as a safer alternative to eval()
      const result = Function(`"use strict"; return (${display})`)();
      setDisplay(result.toString());
    } catch (error) {
      setDisplay("Error");
      setTimeout(() => setDisplay(""), 1500);
    }
  };

  // Function to clear the display
  const clearDisplay = () => {
    setDisplay("");
  };

  // Function to delete the last character
  const deleteLast = () => {
    setDisplay(display.slice(0, -1));
  };

  return (
    <div className="calculator-wrapper">
      <div className="calculator-body">
        <div className="display-screen">{display || "0"}</div>
        
        <div className="keypad">
          <button onClick={clearDisplay} className="btn-alt">AC</button>
          <button onClick={deleteLast} className="btn-alt">DEL</button>
          <button onClick={() => handleClick('/')} className="btn-op">÷</button>
          
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('*')} className="btn-op">×</button>
          
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('-')} className="btn-op">−</button>
          
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('+')} className="btn-op">+</button>
          
          <button onClick={() => handleClick('0')} className="btn-zero">0</button>
          <button onClick={() => handleClick('.')}>.</button>
          <button onClick={calculateResult} className="btn-equal">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
