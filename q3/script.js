document.addEventListener('DOMContentLoaded', () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();
    const dayName = days[now.getDay()];
    
    // Display today's date and day
    const dayDisplay = document.getElementById('current-day');
    dayDisplay.innerText = `Today is ${dayName}, ${now.toLocaleDateString()}`;

    // Logic to highlight the current day column in the table
    const table = document.getElementById('timetable');
    const headers = table.querySelectorAll('th');
    
    headers.forEach((header, index) => {
        if (header.innerText === dayName) {
            header.style.backgroundColor = "#27ae60"; // Highlight header
            
            // Highlight every cell in that column
            const rows = table.querySelectorAll('tbody tr');
            rows.forEach(row => {
                const cell = row.cells[index];
                if (cell && !cell.classList.contains('break') && !cell.classList.contains('lunch')) {
                    cell.style.border = "2px solid #27ae60";
                }
            });
        }
    });
});
