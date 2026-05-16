const textElement = document.getElementById('animatedText');
let isEnlarged = false;

function toggleAnimation() {
    if (isEnlarged) {
        textElement.style.transform = 'scale(0.75)';
        textElement.style.color = '#6f42c1';
        textElement.innerText = 'Shrinking...';
    } else {
        textElement.style.transform = 'scale(1.5)';
        textElement.style.color = '#dc3545';
        textElement.innerText = 'Enlarging...';
    }
    isEnlarged = !isEnlarged;
}

setInterval(toggleAnimation, 1000);
toggleAnimation();
