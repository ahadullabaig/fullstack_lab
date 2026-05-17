const follow = document.getElementById('follow');

follow.addEventListener('click', () => {
    if (follow.innerText === 'Follow') {
        follow.innerText = 'Following';
        follow.classList.add('following');
    } else {
        follow.innerText = 'Follow';
        follow.classList.remove('following');
    }
});
