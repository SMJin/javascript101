const addBtn = document.querySelector('.footer__button');
const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');

function addList() {
    const text = input.value;
    if (text == '') {
        input.focus();
        return;
    }

    const item = createItem(text);
    items.appendChild(item);
    item.scrollIntoView({ block: 'center'});
    
    // button.addEventListener('click', () => {
    //     items.removeChild(li);
    //     items.removeChild(divisor);
    // });

    input.value = '';
    input.focus();  
};

function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');
    itemRow.innerHTML = `
        <div class="item">
            <span class="item__name">${text}</span>
            <button class="item__delete">
                <i class="fas fa-trash-alt"></i>
            </button>
            <div class="divisor"></div>
        </div>
    `;
    return itemRow;
}

addBtn.addEventListener('click', e => {
    addList();
});

input.addEventListener('keypress', e => {
    if (e.key == 'Enter') {
        addList();
    }
});