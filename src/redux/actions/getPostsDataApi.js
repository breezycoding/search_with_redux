//service calls
import { getAllApiData } from "../../service_calls/fetchPost";

export const getPostsDataApi = () => {
    const apiPosts = getAllApiData();
    return{
        type:"GET_POST_DATA",
        data: apiPosts
    }
}