const password = document.getElementById('password');
const bar = document.getElementById('bar');
const feedback = document.querySelector('#feedback span');

const checks = [
    v => v.length >= 8,
    v => /[A-Z]/.test(v),
    v => /[0-9]/.test(v),
    v => /[^A-Za-z0-9]/.test(v)
];

const labels = ['None', 'Weak', 'Medium', 'Strong', 'Very Strong'];

password.addEventListener('input', () => {
    const val = password.value;
    let score = 0;

    checks.forEach(check => {
        if (check(val)) score++;
    });

    bar.style.width = score * 25 + '%';
    feedback.innerText = labels[score];
});
