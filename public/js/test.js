const link = document.querySelectorAll('nav > .hover-this');
const cursorCustom = document.querySelector('.cursor');

const animateit = function (e) {
    const span = this.querySelector('span');
    const { offsetX: x, offsetY: y } = e,
        { offsetWidth: width, offsetHeight: height } = this,

        move = 25,
        xMove = x / width * (move * 2) - move,
        yMove = y / height * (move * 2) - move;

    span.style.transform = `translate(${xMove}px, ${yMove}px)`;

    if (e.type === 'mouseleave') span.style.transform = '';
};

const editCursor = e => {
    const { clientX: x, clientY: y } = e;
    cursorCustom.style.left = x + 'px';
    cursorCustom.style.top = y + 'px';
    console.log(x);
};

link.forEach(b => b.addEventListener('mousemove', animateit));
link.forEach(b => b.addEventListener('mouseleave', animateit));
window.addEventListener('mousemove', editCursor);