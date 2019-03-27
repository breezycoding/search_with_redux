import { GET_ALL_TODOS, GET_ALL_TODOS_ERR } from "../actions/getAllTodos";
const defaultState = {};

export default (state = defaultState, action) => {
    switch(action.type){
        case GET_ALL_TODOS:
            return [state, ...action.payload.data]
        case GET_ALL_TODOS_ERR:
            return {...state, errorMessage: action.payload};
        default :
            return state;
    }
}