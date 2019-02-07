const httpClient = new HttpClient();

class NewsService {
    /**
     * 
     * @param {String} category 
     * @param {String} country 
     * @param {Function} callback
      */
    getTopHeadlinesNews(category = ENV.category, country = ENV.country, callback) {
        httpClient.get(`${ENV.apiUrl}/top-headlines?country=${country}&category=${category}`, callback);
    }

    /**
     *
     * @param {string} q
     * @param {Function} callback
     */
    getNewsByPhrase(q = 'default', callback) {
        httpClient.get(`${ENV.apiUrl}/everything&q=${q}&apiKey=66eb64a469bd4f7285a97443cbf818fc`, callback);
    }
}