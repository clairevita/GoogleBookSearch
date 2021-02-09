import axios from "axios";

export default {
    searchBook: function(query){
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    },

    getBooks: function(){
        return axios.get('/api/books/').then(results => results.data)
    },

    saveBook: function(id){
        return axios.post('/api/books/' + id).then(results => results.data);
    },

    deleteBook: function(id){
        return axios.delete('/api/books/' + id).then(results => results.data);
    }
}