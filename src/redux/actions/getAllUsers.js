import { getUsers } from "../../service_calls/fetchPost";

export const getAllUsers = () => {
    const allUsers = getUsers();
    return{
        type: "GET_ALL_USERS",
        payload: allUsers
    }
}
