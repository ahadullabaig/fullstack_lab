const text = document.getElementById('text');
let isEnlarged = false;

function toggle() {
    if (isEnlarged) {
        text.style.transform = 'scale(0.75)';
        text.style.color = '#6f42c1';
        text.innerText = 'Shrinking...';
    } else {
        text.style.transform = 'scale(1.5)';
        text.style.color = '#dc3545';
        text.innerText = 'Enlarging...';
    }
    isEnlarged = !isEnlarged;
}

setInterval(toggle, 1500);
toggle();
