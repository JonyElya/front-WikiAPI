import * as axios from "axios";

const instance = axios.create({
    baseURL: `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=`,
});
const instanceMyApi = axios.create({
    baseURL: `https://localhost:44301/api/articles`
});

export const ItemsAPI = {
    getArticle(input) {
        return instanceMyApi
            .get(`?title=${input}`)
            .then(response => {
                return response.data;
            });
    },
    getAll(){
        return instanceMyApi
            .get()
            .then(response => {
                return response.data;
            });
    }
};
//https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=
//input + '&format=json'

export const articlesAPI = {
    getArticle(input) {
        return instance
            .get(input + '&format=json')
            .then(response => {
                return response.data;
            });
    }
};