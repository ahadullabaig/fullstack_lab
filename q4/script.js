document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // Prevent the default form submission (page refresh)
    event.preventDefault();

    // Collect data from the form
    const name = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const course = document.getElementById('course').value;
    const semester = document.querySelector('input[name="semester"]:checked').value;

    // Display the success message
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = `
        <strong>Registration Successful!</strong><br>
        Student: ${name}<br>
        Course: ${course.toUpperCase()}<br>
        Term: ${semester}
    `;
    
    messageDiv.classList.remove('hidden');
    messageDiv.classList.add('success');

    // Optional: Reset form after 3 seconds
    setTimeout(() => {
        this.reset();
        messageDiv.classList.add('hidden');
    }, 5000);
});
