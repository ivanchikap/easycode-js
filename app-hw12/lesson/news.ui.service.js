class NewsUI {
    constructor() {
        this.newsContainer = document.querySelector('.news-wrap .row');
    }

    /**
     * 
     * @param {Object} article 
     */
    addArticle(article) {
        console.time();
        const template = NewsUI.generateArticleTemplate(article);
        console.timeEnd();
        // this.newsContainer.insertAdjacentHTML("afterbegin", template);
        this.newsContainer.appendChild(template);
    }

    clearContainer() {
        let first = this.newsContainer.firstElementChild;
        while (first) {
            this.newsContainer.removeChild(first);
            first = this.newsContainer.firstElementChild;
        }
    }

    /**
     * 
     * @param {Object} article 
     */
    static generateArticleTemplate(article) {
        let div = document.createElement('div');
        div.classList.add('col', 's12', 'm6');
        let divCard = document.createElement('div');
        divCard.classList.add('card');
        div.appendChild(divCard);

        let divCardImage = document.createElement('div');
        divCardImage.classList.add('card-image');
        divCard.appendChild(divCardImage);
        let img = document.createElement('img');
        img.src = article.urlToImage;
        divCardImage.appendChild(img);

        let divCardContent = document.createElement('div');
        divCardContent.classList.add('card-content');
        divCard.appendChild(divCardContent);
        let spanCardTitle = document.createElement('span');
        spanCardTitle.classList.add('card-title');
        spanCardTitle.innerHTML = article.title || '';
        divCardContent.appendChild(spanCardTitle);
        let p = document.createElement('p');
        p.innerHTML = article.description || '';
        divCardContent.appendChild(p);

        let divCardAction = document.createElement('div');
        divCardAction.classList.add('card-action');
        divCard.appendChild(divCardAction);
        let a = document.createElement('a');
        a.href = article.url;
        a.target = '_blank';
        a.innerHTML = 'Read more';
        divCardAction.appendChild(a);

        return div;
        // return `
        // <div class="col s12 m6">
        //     <div class="card">
        //         <div class="card-image">
        //             <img src="${article.urlToImage}">
        //         </div>
        //         <div class="card-content">
        //             <span class="card-title">${article.title || ''}</span>
        //
        //             <p>${article.description || ''}</p>
        //         </div>
        //         <div class="card-action">
        //             <a href="${article.url}" target="_blank">Read more</a>
        //         </div>
        //     </div>
        // </div>
        // `;
    }
}

class NotificationsUI {
    constructor() {
        this.notificationContainer = document.querySelector('.notification-wrap .row');
    }

    addNotification() {

        const template = NotificationsUI.generateTemplate();

        this.notificationContainer.insertAdjacentHTML("afterbegin", template);

    }

    clearContainer() {
        let first = this.notificationContainer.firstElementChild;
        while (first) {
            this.notificationContainer.removeChild(first);
            first = this.notificationContainer.firstElementChild;
        }
    }

    static generateTemplate() {
        return `<p class="text-center">По такому запросу ничего не найдено</p>`
    }
}