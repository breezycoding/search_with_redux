const defaultState = {};

export default (state = defaultState, action) => {
    switch(action.type){
        case "SELECTED_USER":
            return state = action.payload;
        default:
            return state;
    }
}