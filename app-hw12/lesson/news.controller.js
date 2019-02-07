const newsService = new NewsService();
const uiService = new NewsUI();
const notificationsUI = new NotificationsUI();

// UI Elements
const form = document.forms['newsControlForm'];
const countrySelect = form['country'];
const categorySelect = form['category'];
const searchInput = document.getElementById('search');

function onSelectChange(event) {
    const country = countrySelect.value;
    const category = categorySelect.value;

    if (!country || !category) return console.error('Введите страну и категорию для поиска');

    newsService.getTopHeadlinesNews(category, country, (response) => {
        const { totalResults, articles } = response;

        // console.time();
        uiService.clearContainer();
        // console.timeEnd();
        notificationsUI.clearContainer();

        // console.time();
        articles.forEach((article) => uiService.addArticle(article));
        // console.timeEnd();
    });
}

function onInputChange() {
    const search = searchInput.value;

    if (search.length > 2) {
        newsService.getNewsByPhrase(search, (response) => {
            const { totalResults, articles } = response;
            notificationsUI.clearContainer();
            if (totalResults === 0) {
                notificationsUI.addNotification();
            }

            uiService.clearContainer();

            articles.forEach((article) => uiService.addArticle(article));
        });
    }
}

countrySelect.addEventListener('change', onSelectChange);
categorySelect.addEventListener('change', onSelectChange);

searchInput.addEventListener('keyup', onInputChange);






