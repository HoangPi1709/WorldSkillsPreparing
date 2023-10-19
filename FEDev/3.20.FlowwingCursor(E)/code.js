const div = document.querySelector('.div-follow-cursor');
document.addEventListener('mousemove', function (event) {
    const cursorX = event.clientX;
    const cursorY = event.clientY;
    div.style.top = `${cursorY + div.offsetHeight / 2}px`;
    div.style.left = `${cursorX - div.offsetWidth / 2}px`;
});
