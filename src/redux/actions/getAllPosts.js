//service calls
import { getAllApiData } from "../../service_calls/fetchPost";

export const getAllPostsAction = () => {
    const apiPosts = getAllApiData();
    return{
        type:"GET_POST_DATA",
        payload: apiPosts
    }
}