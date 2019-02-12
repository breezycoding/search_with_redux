export const getPostsDataApi = ({data} = {}) => {
    return{
        type:"GET_POST_DATA",
        data
    }
}