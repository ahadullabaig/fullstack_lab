const textElement = document.getElementById('animatedText');

// Configuration
const color1 = "#6f42c1"; // Purple
const color2 = "#dc3545"; // Red
const scaleLarge = "scale(1.5)";
const scaleSmall = "scale(0.75)";

let isEnlarged = false;

function toggleAnimation() {
    if (isEnlarged) {
        // Shrink and change to Color 1
        textElement.style.transform = scaleSmall;
        textElement.style.color = color1;
        textElement.innerText = "Shrinking...";
    } else {
        // Enlarge and change to Color 2
        textElement.style.transform = scaleLarge;
        textElement.style.color = color2;
        textElement.innerText = "Enlarging...";
    }
    
    // Toggle the state for the next interval
    isEnlarged = !isEnlarged;
}

// Run the toggle function every 1000ms (1 second)
setInterval(toggleAnimation, 1000);

// Initial call to start the animation immediately
toggleAnimation();
