const addBtn = document.querySelector('.footer__button');
const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');

input.focus();

function addList() {
    const text = input.value;
    if (text == '') {
        input.focus();
        return;
    }

    const item = createItem(text);
    items.appendChild(item);
    item.scrollIntoView({ block: 'center'});
    input.value = '';
    input.focus();  
};

let id = 1;
function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');
    itemRow.setAttribute('data-id', `${id}`);
    itemRow.innerHTML = `
        <div class="item">
            <span class="item__name">${text}</span>
            <button class="item__delete">
                <i class="fas fa-trash-alt" data-id=${id}></i>
            </button>
        </div>
        <div class="divisor"></div>
    `;

    id ++;
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

items.addEventListener('click', e => {
    const current__id = e.target.dataset.id;
    if (current__id) {
        console.log('delete 버튼이 눌렸습니다! id는 ' + current__id + '입니다.');
        const toBeDeleted = document.querySelector(`.item__row[data-id="${current__id}"]`);
        items.removeChild(toBeDeleted);
    }
});