const addBtn = document.querySelector('.footer__button');
const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');

function addList() {
    const input__value = input.value;
    if (input__value == '') {
        input.focus();
        return;
    }

    const li = document.createElement("li");
    const item = document.createElement("div");
    const text = document.createElement("span");
    const button = document.createElement("button");
    const divisor = document.createElement("div");

    li.setAttribute('class', 'item__row');
    item.setAttribute('class', 'item');
    text.setAttribute('class', 'item__name');
    button.setAttribute('class', 'item__delete');
    divisor.setAttribute('class', 'divisor');

    text.innerText = input__value;
    button.innerHTML = '<i class="fas fa-trash-alt"></i>';

    li.appendChild(item);
    item.appendChild(text);
    item.appendChild(button);
    items.appendChild(li);
    items.appendChild(divisor);
    
    item.scrollIntoView({ block: 'center'});
    button.addEventListener('click', () => {
        items.removeChild(li);
        items.removeChild(divisor);
    });

    input.value = '';
    input.focus();  
};

addBtn.addEventListener('click', e => {
    addList();
});

input.addEventListener('keypress', e => {
    if (e.key == 'Enter') {
        addList();
    }
});