export const selectedUser = (data = {}) => {
    return{
        type: "SELECTED_USER",
        payload: data
    }
}