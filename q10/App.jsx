import { useState } from 'react';

function App() {
    const [candidates, setCandidates] = useState([
        { name: 'Alice', votes: 0 },
        { name: 'Bob', votes: 0 },
        { name: 'Charlie', votes: 0 }
    ]);

    function vote(i) {
        const updated = [...candidates];
        updated[i].votes++;
        setCandidates(updated);
    }

    return (
        <div className="card">
            <h1>Vote for your candidate</h1>
            {candidates.map((c, i) => (
                <div key={i}>
                    <h2>{c.name}: {c.votes}</h2>
                    <button onClick={() => vote(i)}>Vote</button>
                </div>
            ))}
        </div>
    );
}

export default App;
