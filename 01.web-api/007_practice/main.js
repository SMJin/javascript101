const tag = document.querySelector(".tag");
const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");
const gun = document.querySelector(".gun");

document.addEventListener('mousemove', e => {
    const cx = e.clientX;
    const cy = e.clientY;
    
    vertical.style.left = `${cx}px`;
    horizontal.style.top = `${cy}px`;

    gun.style.left = `${cx}px`;
    gun.style.top = `${cy}px`;

    tag.style.left = `${cx}px`;
    tag.style.top = `${cy}px`;
    tag.innerHTML = `${cx}px, ${cy}px`
});