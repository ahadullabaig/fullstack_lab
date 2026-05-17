import { useState } from 'react';

function App() {
    const [on, setOn] = useState(false);

    return (
        <div className="card">
            <h1>The light is {on ? 'ON' : 'OFF'}</h1>
            <button onClick={() => setOn(!on)}>
                Turn {on ? 'OFF' : 'ON'}
            </button>
        </div>
    );
}

export default App;
