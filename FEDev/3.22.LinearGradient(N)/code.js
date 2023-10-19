const elementLeft = document.querySelector('input[name="first-color"]');
const elementRight = document.querySelector('input[name="last-color"]');
const bg = document.querySelector('.bg');
const btnLefts = document.querySelectorAll('.btn-color-left');
const btnRights = document.querySelectorAll('.btn-color-right');

let colorLeft = 'red';
let colorRight = 'blue';
const handleLeft = (e) => {
    colorLeft = e.target.value;
    bg.style.backgroundImage = `linear-gradient(to right,${e.target.value}, ${colorRight})`;
};
const handleRight = (e) => {
    colorRight = e.target.value;
    bg.style.backgroundImage = `linear-gradient(to right,${colorLeft}, ${e.target.value})`;
};
elementLeft.onchange = handleLeft;
elementRight.onchange = handleRight;

btnLefts.forEach(
    (item) =>
        (item.onclick = (e) => {
            const color = e.target.dataset.color;
            colorLeft = color;
            bg.style.backgroundImage = `linear-gradient(to right,${color}, ${colorRight})`;
        }),
);
btnRights.forEach(
    (item) =>
        (item.onclick = (e) => {
            const color = e.target.dataset.color;
            colorRight = color;
            bg.style.backgroundImage = `linear-gradient(to right,${colorLeft}, ${color})`;
        }),
);
