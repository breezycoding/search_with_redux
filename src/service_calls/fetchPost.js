import axios from "axios";

const FETCH_POST = "https://jsonplaceholder.typicode.com/posts";
const FETCH_USERS = "https://jsonplaceholder.typicode.com/users";

export const getAllApiData = () => {
    return axios.get(FETCH_POST);
}

export const getUsers = () => {
    return axios.get(FETCH_USERS);
}

