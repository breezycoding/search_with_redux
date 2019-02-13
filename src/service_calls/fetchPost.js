import axios from "axios";

export const FETCH_POST = "https://jsonplaceholder.typicode.com/posts";

export function getAllApiData(){
    return axios.get(FETCH_POST);
}

