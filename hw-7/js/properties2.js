// 1. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:
//     <ul>
// <li><a href="#">Link1</a></li>
// ...
// <li class=”new-item”>item 5</li>
// <li class=”new-item”>item 6</li>
// </ul>
// Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.
let ul = document.querySelector('ul');
function createLi() {
    let li = document.createElement('li');
    li.classList.add('new-item');
    li.textContent = `item ${ul.children.length + 1}`;
    return li;
}

ul.appendChild(createLi());
ul.appendChild(createLi());

// 2. Создать три элемента strong и добавить их в конец ссылок, которые находятся внутри списка ul (в каждую ссылку один - strong).
for (let i = 0; i < 3; i++) {
    ul.getElementsByTagName('a')[i].insertAdjacentElement("beforeend", document.createElement('strong'));
}

// 3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами). В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement.
let img = document.createElement('img');
img.setAttribute('src', 'https://lovingonme.com/2017/wp-content/uploads/2013/04/smile.jpg');
img.setAttribute('alt', 'smile');
img.setAttribute('width', '300px');
document.body.insertAdjacentElement("afterbegin", img);

// 4. Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green
let mark = document.querySelector('mark');
mark.insertAdjacentText("beforeend", ' green');
mark.classList.add('green');

// 5. Отсортировать li внутри списка в обратном порядке (по тексту внутри)
let liElements = ul.children;
let liArray = [];
for (let li of liElements) {
    liArray.push(li);
}

liArray.sort(function (liPrev, liNext) {
    console.log(liPrev, liNext);
    if (liPrev.textContent > liNext.textContent) return -1;
    if (liPrev.textContent < liNext.textContent) return 1;
});

for (let i = 0; i < liArray.length; i++) {
    ul.insertAdjacentElement('beforeend', liArray[i]);
}







