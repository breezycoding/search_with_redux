const defaultState = {};

export default ( state = defaultState, action) => {
    switch(action.type){
        case "GET_ALL_USERS": 
            return [...state, ...action.payload.data];
        default:
            return state;
    }
}