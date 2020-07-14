import * as axios from "axios";

const instance = axios.create({
    baseURL: `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=`,
    headers: {'Access-Control-Allow-Origin': '*','Content-Type': 'application/json' },
});
export const articlesAPI = {
    getArticle(input) {
        return instance
            .get(input + '&format=json')
            .then(response => {
                return response.data;
            });
    }
};
//https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=
//input + '&format=json'