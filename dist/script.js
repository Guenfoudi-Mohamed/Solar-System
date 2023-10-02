"use strict";
function setStar(value) {
    const container = document.querySelector('body #container');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const stars = container.querySelector('.stars');
    if (value > 0) {
        for (let i = 0; i < value; i++) {
            const star = document.createElement('div');
            star.className = `str`;
            star.classList.add(`str${i}`);
            star.style.setProperty('top', `${Math.floor(Math.random() * containerHeight)}px`);
            star.style.setProperty('left', `${Math.floor(Math.random() * containerWidth)}px`);
            stars.appendChild(star);
        }
    }
    console.log(containerWidth, containerHeight);
}
setStar(150);
