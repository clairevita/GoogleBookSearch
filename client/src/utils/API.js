import axios from "axios";

export default {
    searchBook: function(query){
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    },

    getBooks: function(){
        return axios.get('/api/books/' + id);
    },

    saveBook: function(id){
        return axios.post('/api/books/' + id);
    },

    deleteBook: function(id){
        return axios.delete('/api/books/' + id);
    }
}