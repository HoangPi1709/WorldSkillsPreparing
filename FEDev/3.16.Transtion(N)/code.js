const netItems = document.querySelectorAll('.net-item');

const handleDisplay = (e) => {
    e.target.classList.toggle('active');
};

netItems.forEach((item) => (item.onclick = handleDisplay));
