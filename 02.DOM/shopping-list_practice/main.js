const addButton = document.querySelector('footer__button');
const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');

function addList() {
    const input__value = input.value;

    const li = document.createElement("li");
    li.setAttribute('class', 'item__row');

    const item = document.createElement("div");
    item.setAttribute('class', 'item');
    li.appendChild(item);

    const text = document.createTextNode(input__value);
    item.appendChild(text);

    const button = document.createElement("button");
    button.setAttribute('class', 'item__delete');
    const icon = document.createElement("i");
    icon.setAttribute('class', 'fas fa-trash-alt');
    button.appendChild(icon);

    item.appendChild(button);

    const divisor = document.createElement("div");
    divisor.setAttribute('class', 'divisor');
    divisor.setAttribute('width', '90%');
    divisor.setAttribute('height', '1px');
    divisor.setAttribute('background-color','lightgray');
    divisor.setAttribute('margin', 'auto');
    
    items.appendChild(li);
    items.appendChild(divisor);
};