import { useState } from 'react';

function App() {
    const [name, setName] = useState('');
    const date = new Date().toLocaleDateString();

    return (
        <div className="card">
            <h1>Welcome!</h1>
            <p>Today's date: {date}</p>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            {name && <h2>Hello, {name}!</h2>}
        </div>
    );
}

export default App;
