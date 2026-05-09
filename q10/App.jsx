import React, { useState } from 'react';
import './App.css';

function App() {
  // Initialize state with an array of candidates
  const [candidates, setCandidates] = useState([
    { id: 1, name: "JavaScript", votes: 0, color: "#f7df1e" },
    { id: 2, name: "Python", votes: 0, color: "#3776ab" },
    { id: 3, name: "React", votes: 0, color: "#61dafb" },
    { id: 4, name: "Java", votes: 0, color: "#007396" }
  ]);

  // Function to handle voting
  const castVote = (id) => {
    // We map through the array and only update the one with the matching ID
    const updatedCandidates = candidates.map(candidate => {
      if (candidate.id === id) {
        return { ...candidate, votes: candidate.votes + 1 };
      }
      return candidate;
    });
    setCandidates(updatedCandidates);
  };

  // Calculate total votes for the percentage or display
  const totalVotes = candidates.reduce((acc, curr) => acc + curr.votes, 0);

  return (
    <div className="voting-container">
      <h1>Vote for your Favorite Language</h1>
      <p className="total-label">Total Votes Cast: {totalVotes}</p>

      <div className="candidate-list">
        {candidates.map(candidate => (
          <div key={candidate.id} className="candidate-card">
            <div className="candidate-info">
              <h3>{candidate.name}</h3>
              <span className="vote-count">{candidate.votes} votes</span>
            </div>
            
            <button 
              className="vote-btn" 
              style={{ backgroundColor: candidate.color }}
              onClick={() => castVote(candidate.id)}
            >
              Vote for {candidate.name}
            </button>

            {/* Visual progress bar */}
            <div className="progress-bg">
              <div 
                className="progress-fill" 
                style={{ 
                  width: totalVotes > 0 ? `${(candidate.votes / totalVotes) * 100}%` : '0%',
                  backgroundColor: candidate.color 
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <button className="reset-btn" onClick={() => setCandidates(candidates.map(c => ({...c, votes: 0})))}>
        Reset All Votes
      </button>
    </div>
  );
}

export default App;
