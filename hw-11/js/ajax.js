// Получить пользователей (users) от сервера https://jsonplaceholder.typicode.com используя класс созданный на занятии. Получив ответ от сервера вывести имена пользователей на страницу. При клике на имя пользователя в произвольном месте должна появиться подробная информация о нем. Для визуальной части можно использовать bootstrap или другие фреймворки.

class CustomHttp {
    get(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.addEventListener('load', () => callback(xhr.responseText));
    }

    post(url, data, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send(data);
        xhr.addEventListener('load', () => callback(xhr.responseText));
    }
}

let httpClient = new CustomHttp();


httpClient.get('https://jsonplaceholder.typicode.com/users', viewUsers);

function viewUsers(response) {
    let userList = document.querySelector('.user-list');
    let userInfo = document.querySelector('.user-info');
    let users = JSON.parse(response);
    console.log(users);
    for (let user of users) {
        let li = document.createElement('li');
        li.innerText = user.username;
        li.dataset.id = user.id;
        userList.appendChild(li);
        let div = document.createElement('div');
        div.classList.add('d-none');
        div.dataset.id = user.id;
        userInfo.appendChild(div);

        for (let divElement of userInfo.children) {
            if (divElement.dataset.id == user.id ) {
                for (let key in user) {
                    let p = document.createElement('p');
                    p.innerText = `${key} : ${user[key]}`;
                    div.appendChild(p);
                }
            }
        }



    }
    userList.addEventListener('click', displayInfo);
    function displayInfo(e) {
        console.log(e.target);
        for (let divElement of userInfo.children) {
            divElement.classList.add('d-none');
            if (e.target.dataset.id === divElement.dataset.id) {
                divElement.classList.toggle('d-none');
            }
        }
    }
}


