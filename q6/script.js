const password = document.getElementById('password');
const bar = document.getElementById('bar');
const feedback = document.querySelector('#feedback span');

const checks = [
    { id: 'length',  test: v => v.length >= 8 },
    { id: 'upper',   test: v => /[A-Z]/.test(v) },
    { id: 'number',  test: v => /[0-9]/.test(v) },
    { id: 'special', test: v => /[^A-Za-z0-9]/.test(v) }
];

const states = [
    { width: '0%',   color: 'transparent', text: 'None' },
    { width: '25%',  color: '#e94560',     text: 'Weak' },
    { width: '50%',  color: '#f39c12',     text: 'Medium' },
    { width: '75%',  color: '#3498db',     text: 'Strong' },
    { width: '100%', color: '#27ae60',     text: 'Very Strong' }
];

password.addEventListener('input', () => {
    const val = password.value;
    let score = 0;

    checks.forEach(c => {
        const valid = c.test(val);
        document.getElementById(c.id).classList.toggle('valid', valid);
        if (valid) score++;
    });

    const s = states[score];
    bar.style.width = s.width;
    bar.style.backgroundColor = s.color;
    feedback.innerText = s.text;
    feedback.style.color = s.color;
});
