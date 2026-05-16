const passwordInput = document.getElementById('password');
const strengthBar = document.getElementById('strengthBar');
const feedbackText = document.querySelector('#feedbackText span');
const toggleText = document.getElementById('toggleText');

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

toggleText.addEventListener('click', () => {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    toggleText.innerText = isPassword ? 'Hide' : 'Show';
});

passwordInput.addEventListener('input', () => {
    const val = passwordInput.value;
    let score = 0;

    checks.forEach(c => {
        const valid = c.test(val);
        document.getElementById(c.id).classList.toggle('valid', valid);
        if (valid) score++;
    });

    const s = states[score];
    strengthBar.style.width = s.width;
    strengthBar.style.backgroundColor = s.color;
    feedbackText.innerText = s.text;
    feedbackText.style.color = s.color;
});
