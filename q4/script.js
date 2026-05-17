const form = document.getElementById('registrationForm');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const course = document.getElementById('course').value;

    messageDiv.innerHTML = `
        <strong>Registration Successful!</strong><br>
        Student: ${name}<br>
        Email: ${email}<br>
        Course: ${course.toUpperCase()}<br>
    `;
    messageDiv.classList.remove('hidden');
});
