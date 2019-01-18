// 1. Найти в коде список ul и добавить класс “list”
let ul = document.querySelector('ul');
ul.classList.add('list');

// 2. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
let linkAfterUl = ul.nextElementSibling.nextElementSibling;
linkAfterUl.setAttribute('id', 'link');
// 3. На li через один (начиная с самого первого) установить класс “item”

let liElements = ul.children;

for (let i = 0; i < liElements.length; i += 2) {
    liElements[i].classList.add('item');
}
// 4. На все ссылки в примере установить класс “custom-link”
let links = document.links;

for (let link of links) {
    link.classList.add('custom-link');
}

