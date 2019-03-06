import { getTodos } from './../../service_calls/fetchPost';
export const GET_ALL_TODOS = "GET_ALL_TODOS";
export const GET_ALL_TODOS_ERR = "GET_ALL_TODOS_ERR";

export const getAllTodosAction = () => async dispatch => {
    try{
        const response = await getTodos();
        dispatch({
            type: GET_ALL_TODOS,
            payload: response
        });
    }catch(e){
        dispatch({
            type: GET_ALL_TODOS_ERR,
            payload: e
        });
    }
}