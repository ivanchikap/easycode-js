// 1.По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в атрибуте data-text у кнопки.
const btnMsg = document.querySelector('#btn-msg');
btnMsg.addEventListener('click', function() {
    alert(btnMsg.dataset.text);
});
// 2. При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши покидает кнопку, она становится прежнего цвета. Цвет менять можно через добавление класса.
btnMsg.addEventListener('mouseover', function() {
    console.log('mouse here');
    btnMsg.classList.add('red');
});
btnMsg.addEventListener('mouseout', function() {
    btnMsg.classList.remove('red');
});
// 3. При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.
document.addEventListener('click', function(event) {
    const tag = document.querySelector('#tag');

    tag.innerHTML = '<p><strong>Tag: </strong>' + event.target.tagName + '</p>';
});
// 4. При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li с текстом Item + порядковый номер Li по списку, т.е Item 3, Item 4 и т.д
let ul = document.querySelector('ul');
function createLi() {
    let li = document.createElement('li');
    li.textContent = `Item ${ul.children.length + 1}`;
    return li;
}
const btnGenerate = document.querySelector('#btn-generate');
btnGenerate.addEventListener('click', function() {
    ul.appendChild(createLi());
});

// 5. Из проекта todo реализовать редактирование задачи. (На занятии в конце второй части было пояснение).
// https://github.com/ivanchikap/todos
