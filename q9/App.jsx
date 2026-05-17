import { useState } from 'react';

function App() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [op, setOp] = useState('+');
    const [result, setResult] = useState(null);

    function calculate() {
        const a = parseFloat(num1);
        const b = parseFloat(num2);
        if (op === '+') setResult(a + b);
        else if (op === '-') setResult(a - b);
        else if (op === '*') setResult(a * b);
        else if (op === '/') setResult(a / b);
    }

    return (
        <div className="card">
            <h1>Calculator</h1>
            <input
                type="number"
                placeholder="First"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />
            <select value={op} onChange={(e) => setOp(e.target.value)}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <input
                type="number"
                placeholder="Second"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />
            <br />
            <button onClick={calculate}>Calculate</button>
            {result !== null && <h2>Result: {result}</h2>}
        </div>
    );
}

export default App;
