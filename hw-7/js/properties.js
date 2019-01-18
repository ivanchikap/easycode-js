// 1. Найти параграф и получить его текстовое содержимое (только текст!)
const p = document.querySelector('p');
const pText = p.textContent;
console.log(pText);

// 2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).

function getNodeType(node) {
    return {
        type: node.nodeType,
        name: node.nodeName,
        count: node.childNodes.length
    }
}

// 3. Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]
const ul = document.querySelector('ul');
function getTextFromUl(elem) {
    let mas = [];
    for (let i = 0; i < elem.children.length; i++) {
        mas.push(elem.children[i].textContent);
    }
    return mas;
}
console.log(getTextFromUl(ul));
// 4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:
//     -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-

const pTask4 = document.querySelector('p');

for (let node of pTask4.childNodes) {
    if (node.nodeType === 3) {
        node.textContent = '-text-';
    } else {
        console.log('Оставили старое значение');
    }
}

