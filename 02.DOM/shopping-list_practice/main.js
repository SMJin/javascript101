const addBtn = document.querySelector('.footer__button');
const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');

function addList() {
    // 사용자가 입력한 텍스트를 받아온다.
    const input__value = input.value;

    // 만약 아무것도 입력되지 않는다면, 리스트에 추가되지 않는다.
    if (input__value == '') {
        input.focus();
        return;
    }

    // 새로운 li 태그를 생성한다.
    const li = document.createElement("li");
    li.setAttribute('class', 'item__row');

    // 새로운 item div 를 생성한다. 그리고 li 태그안에 넣는다.
    const item = document.createElement("div");
    item.setAttribute('class', 'item');
    li.appendChild(item);

    const text = document.createElement("span");
    text.setAttribute('class', 'item__name');
    text.innerText = input__value;
    item.appendChild(text);

    const button = document.createElement("button");
    button.setAttribute('class', 'item__delete');
    button.innerHTML = '<i class="fas fa-trash-alt"></i>';

    button.addEventListener('click', () => {
        items.removeChild(li);
        items.removeChild(divisor);
    });

    item.appendChild(button);

    const divisor = document.createElement("div");
    divisor.setAttribute('class', 'divisor');
    
    items.appendChild(li);
    items.appendChild(divisor);

    // input을 초기화한다.
    input.value = '';
    input.focus();  

};

addBtn.addEventListener('click', e => {
    addList();
});