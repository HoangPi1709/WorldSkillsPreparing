const lisBtn = document.querySelectorAll('.btn');
const face = document.querySelector('.face');

const handleFace = (event) => {
    const statusFace = event.target.dataset.face;
    face.classList.remove(face.classList[1]);
    face.classList.add(statusFace);
};

lisBtn.forEach((item) => (item.onclick = handleFace));
