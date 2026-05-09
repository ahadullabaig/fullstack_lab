import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // State to store the user's name
  const [userName, setUserName] = useState('');
  
  // State to store the current date/time
  const [currentDate, setCurrentDate] = useState(new Date());

  // Update the clock every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    // Cleanup the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h1>Welcome to React</h1>
        
        <div className="date-section">
          <h3>Current Date & Time:</h3>
          <p className="date-display">{currentDate.toLocaleString()}</p>
        </div>

        <div className="input-section">
          <label htmlFor="nameInput">Enter Your Name:</label>
          <input 
            type="text" 
            id="nameInput"
            placeholder="Type here..." 
            value={userName}
            onChange={(e) => setUserName(e.target.value)} 
          />
        </div>

        {/* Conditional Rendering: Only show greeting if name is typed */}
        {userName && (
          <div className="greeting-box">
            <h2>Hello, {userName}! 👋</h2>
            <p>Glad to have you learning React today.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
