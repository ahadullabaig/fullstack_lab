const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const now = new Date();
const dayName = days[now.getDay()];

document.getElementById('current-day').innerText = `Today is ${dayName}, ${now.toLocaleDateString()}`;

const headers = document.querySelectorAll('#timetable th');
headers.forEach((header, index) => {
    if (header.innerText === dayName) {
        header.style.backgroundColor = '#27ae60';
        const rows = document.querySelectorAll('#timetable tbody tr');
        rows.forEach(row => {
            row.cells[index].style.border = '2px solid #27ae60';
        });
    }
});
