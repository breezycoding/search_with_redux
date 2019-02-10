export const searchApi = (posts = []) => {
    return{
        type: "SEARCH_API",
        posts
    }
}