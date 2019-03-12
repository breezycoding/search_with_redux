import { GET_RESOURCES_BY_USERS, GET_RESOURCES_BY_USERS_ERR } from "../actions/getResourcesByUsers";
const defaultState = {};

export default (state = defaultState, action) => {
    switch(action.type){
        case GET_RESOURCES_BY_USERS:
            return [...state, action.payload];
        case GET_RESOURCES_BY_USERS_ERR:
            return [...state, action.payload];
        default:
            return state;
    }
}