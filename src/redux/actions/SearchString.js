export const searchString = ({searchValue = "",searchKey = ""} = {}) => {
    return{
        type: "STRING_WORD",
        searchString:{
            searchValue,
            searchKey
        }
    }
}