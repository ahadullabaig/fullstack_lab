const passwordInput = document.getElementById('password');
const strengthBar = document.getElementById('strengthBar');
const feedbackText = document.querySelector('#feedbackText span');
const toggleText = document.getElementById('toggleText');

// Toggle Password Visibility
toggleText.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    toggleText.innerText = type === 'password' ? 'Show' : 'Hide';
});

// Check Strength Logic
passwordInput.addEventListener('input', () => {
    const val = passwordInput.value;
    let score = 0;

    // 1. Length Check
    if (val.length >= 8) {
        score++;
        document.getElementById('length').classList.add('valid');
    } else {
        document.getElementById('length').classList.remove('valid');
    }

    // 2. Uppercase Check
    if (/[A-Z]/.test(val)) {
        score++;
        document.getElementById('upper').classList.add('valid');
    } else {
        document.getElementById('upper').classList.remove('valid');
    }

    // 3. Number Check
    if (/[0-9]/.test(val)) {
        score++;
        document.getElementById('number').classList.add('valid');
    } else {
        document.getElementById('number').classList.remove('valid');
    }

    // 4. Special Character Check
    if (/[^A-Za-z0-9]/.test(val)) {
        score++;
        document.getElementById('special').classList.add('valid');
    } else {
        document.getElementById('special').classList.remove('valid');
    }

    // Update UI based on score
    updateMeter(score);
});

function updateMeter(score) {
    const states = [
        { width: '0%', color: 'transparent', text: 'None' },
        { width: '25%', color: '#e94560', text: 'Weak' },
        { width: '50%', color: '#f39c12', text: 'Medium' },
        { width: '75%', color: '#3498db', text: 'Strong' },
        { width: '100%', color: '#27ae60', text: 'Very Strong' }
    ];

    strengthBar.style.width = states[score].width;
    strengthBar.style.backgroundColor = states[score].color;
    feedbackText.innerText = states[score].text;
    feedbackText.style.color = states[score].color;
}
