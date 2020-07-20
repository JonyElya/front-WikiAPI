import * as axios from "axios";

const instance = axios.create({
    baseURL: `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=`,
});
const instanceMyApi = axios.create({
    baseURL: `https://localhost:44301/api/`
});
export const ItemsAPI = {
    getArticle(input) {
        return instanceMyApi
            .get(`articles?title=${input}`)
            .then(response => {
                return response.data;
            });
    },
    getAll(){
        return instanceMyApi
            .get(`articles`)
            .then(response => {
                return response.data;
            });
    },
    create(values){
        return instanceMyApi
            .post(`articles`, values )
            .then(response => response.data)
    },
    remove(id){
        return instanceMyApi
            .delete(`articles/${id}`)
            .then(response => response.data)
    },
    update(id, values){
        return instanceMyApi
            .put(`articles/${id}`, values)
            .then(response => response.data)
    },
    get(id){
        return instanceMyApi.get(`/articles/${id}`)
    }

};

export const articlesAPI = {
    getArticle(input) {
        return instance
            .get(input + '&format=json')
            .then(response => {
                return response.data;
            });
    }
};