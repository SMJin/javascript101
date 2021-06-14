const tag = document.querySelector(".tag");
const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");
const gun = document.querySelector(".gun");

addEventListener('load', () => {
    const gunRect = gun.getBoundingClientRect();
    const gunHalfWidth = gunRect.width / 2;
    const gunHalfHeight = gunRect.height / 2;

    document.addEventListener('mousemove', e => {
        const cx = e.clientX;
        const cy = e.clientY;

        vertical.style.transform = `translateX(${cx}px)`;
        horizontal.style.transform = `translateY(${cy}px)`;

        gun.style.transform = `translate(${cx-gunHalfWidth}px, ${cy-gunHalfHeight}px)`;
        tag.style.transform = `translate(${cx + 20}px, ${cy + 20}px)`;
        tag.innerHTML = `${cx}px, ${cy}px`;
    });
});