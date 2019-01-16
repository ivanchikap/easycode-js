/**
 * TODOS
 * 1. Добавление задачи
 * 2. Удаление задачи
 * 3. Редактирование задачи
 */

/**
 * Одна задача это объект из следующих полей
 * id - произвольная уникальная строка
 * title - заголовок задачи
 * text - текст задачи
 */


/**
 * todosStorage - обьект для хранения всех todos
 * currentTodos - список текущих задач
 * deletedTodos - список удаленных задач
 */
const todosStorage = {
    currentTodos: [],
    deletedTodos: []

};

/**
 *
 * @param {String} title
 * @param {String} text
 * @returns {[]} currentTodos
 */
const addTodoItem = (title, text) => {
    if (!title) return console.log('Please provide todo title');
    if (!text) return console.log('Please provide todo text');

    todosStorage.currentTodos.push({title, text, id: generateId()});
    return todosStorage.currentTodos;
};

/**
 * genrateId - создает произвольную строку
 * @returns {string} - новый id
 */
const generateId = () => {
    const uniqueValues = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';

    let uniqueMas = uniqueValues.split('');

    // let id = uniqueMas.reduce(function(prev, current){
    //     console.log(Math.floor(Math.random() * uniqueValues.length));
    //     return prev + current[Math.floor(Math.random() * uniqueValues.length)];
    // }, [Math.floor(Math.random() * uniqueValues.length)]);

    for (let i = 0; i < 10; i++ ) {
        const index = Math.floor(Math.random() * uniqueValues.length);
        id += uniqueValues[index];
    }

    // return id.slice(0, 10);

    return id;
};

/**
 * @param {String} id
 * @returns {[]} currentTodos
 */
const deleteTodoItem = (id) => {
    if (!id) return console.log("Передайте id удаляемой задачи.");

    todosStorage.currentTodos = todosStorage.currentTodos.filter((todoItem) => todoItem.id !== id);
    return todosStorage.currentTodos;
};
/**
 *
 * @param {String} idCur
 * @param {String} title
 * @param {String} text
 */
const editTodoItem = (idCur, title, text) => {
    if (idCur && title && !text) {
        for (let task of todosStorage.currentTodos) {
            if (task.id === idCur) {
                task.title = title;
                break;
            } else {
                console.log(`Задачи с таким id = ${idCur} нету`);
            }
        }
    } else if (idCur && text && !title) {
        for (let task of todosStorage.currentTodos) {
            console.log(task.id, task.title, task.text, idCur, task.id === idCur);
            if (task.id === idCur) {
                task.text = text;
                break;
            } else {
                console.log(`Задачи с таким id = ${idCur} нету`);
            }
        }
    } else if (idCur && text && title) {
        for (let task of todosStorage.currentTodos) {
            if (task.id === idCur) {
                task.title = title;
                task.text = text;
                break;
            } else {
                console.log(`Задачи с таким id = ${idCur} нету`);
            }
        }
    } else {
        return console.log("Введите id и как минимум один из пераметров: заголовок или текст");
    }

    return todosStorage.currentTodos;
};