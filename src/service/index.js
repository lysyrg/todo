import axios from "axios";

const API_URL = 'https://6312316119eb631f9d81e6e4.mockapi.io/todos';

export const fetchTodos = ( onFetch ) => {
    axios.get(API_URL).then(data => {
        onFetch(data.data);
    })
}

export const updateTodo = ( todo ) => {
    return new Promise((resolve, reject) => {
        axios.put(`${API_URL}/${todo.id}`, todo).then(data => {
            resolve(data);
        })
    })
}

export const deleteTodo = (id) => {
    return new Promise((resolve, reject) => {
        axios.delete(`${API_URL}/${id}`).then(data => {
            resolve(data);
        })
    })
}

export const createTodo = (todo) => {
    return new Promise((resolve, reject) => {
        axios.post(API_URL, todo).then(data => {
            resolve(data);
        })
    })
}