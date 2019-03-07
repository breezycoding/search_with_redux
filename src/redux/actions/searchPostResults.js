export const searchPostResultsAction = (posts = []) => {
    return{
        type: "SEARCH_API",
        posts
    }
}