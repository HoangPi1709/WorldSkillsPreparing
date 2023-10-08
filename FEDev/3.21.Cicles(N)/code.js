class Circle {
    constructor(content, color, x, y, r) {
        this.content = content;
        this.color = color;
        this.x = x;
        this.y = y;
        this.r = r;
    }
}
const contents = ['Home', 'About', 'Contact', 'Privacy', 'Map'];
const colors = ['#1F2041', '#4B3F72', ' #417B5A', ' #D0CEBA', '#E9D2C0'];
window.onload = () => {
    const listCircle = contents.map((item, i) => {
        const r = Math.floor(Math.random() * (400 - 300) + 300);
        if (i <= 2) {
            const y = Math.floor(Math.random() * 20);
            const x = Math.floor(Math.random() * (r * (i + 0.3) - r * (i + 0.3)) + 400 * (i + 0.3));
            return new Circle(item, colors[i], x, y, r);
        } else {
            const y = Math.floor(Math.random() * (document.body.clientHeight / 2 - (r + 200)) + (r + 200));
            const x = Math.floor(Math.random() * (r * (i - 2) - r * (i - 2)) + 400 * (i - 2));
            return new Circle(item, colors[i], x, y, r);
        }
    });
    listCircle.forEach((item) => {
        const div = document.createElement('div');
        div.innerText = item.content;
        div.classList = 'circle';
        div.style.background = item.color;
        div.style.top = `${item.y}px`;
        div.style.left = `${item.x}px`;
        div.style.width = `${item.r}px`;
        div.style.height = `${item.r}px`;
        document.body.appendChild(div);
    });
};
