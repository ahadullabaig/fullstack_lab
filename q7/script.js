const stars = document.querySelectorAll('.star');
const message = document.getElementById('rating-message');

let rating = 0;

function paint(n)
{
    stars.forEach((star, i) => {
        star.classList.toggle('on', i < n);
    });
}

stars.forEach((star, i) => {
    star.onmouseenter = () => paint(i + 1);
    star.onmouseleave = () => paint(rating);
    star.onclick = () => {
        rating = i + 1;
        paint(rating);
        message.textContent = `You rated ${rating} stars!`;
    };
});

document.getElementById('reset-btn').onclick = () => {
    rating = 0;
    paint(0);
    message.textContent = 'Click a star to rate!';
};
