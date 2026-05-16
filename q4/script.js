const form = document.getElementById('registrationForm');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const course = document.getElementById('course').value;
    const semester = document.querySelector('input[name="semester"]:checked').value;

    messageDiv.innerHTML = `
        <strong>Registration Successful!</strong><br>
        Student: ${name}<br>
        Email: ${email}<br>
        Course: ${course.toUpperCase()}<br>
        Term: ${semester}
    `;
    messageDiv.classList.remove('hidden');
});
