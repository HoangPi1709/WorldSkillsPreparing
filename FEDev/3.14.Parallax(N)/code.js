const container = document.querySelector('.container');
const parallaxElements = document.querySelectorAll('.parallax-element');

window.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX - container.offsetLeft;
    const mouseY = e.clientY - container.offsetTop;
    const parallaxFactorX = (mouseX - container.clientWidth / 2) / (container.clientWidth / 2);
    const parallaxFactorY = (mouseY - container.clientHeight / 2) / (container.clientHeight / 2);
    parallaxElements.forEach((element) => {
        const parallaxDistanceX = parallaxFactorX * element.dataset.parallaxSpeed;
        const parallaxDistanceY = parallaxFactorY * element.dataset.parallaxSpeed;
        element.style.transform = `translate(${parallaxDistanceX}px, ${parallaxDistanceY}px)`;
    });
});
