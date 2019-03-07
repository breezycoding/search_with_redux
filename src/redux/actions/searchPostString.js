export const searchPostStringAction = ({searchValue = "",searchKey = ""} = {}) => {
    return{
        type: "STRING_WORD",
        searchString:{
            searchValue,
            searchKey
        }
    }
}