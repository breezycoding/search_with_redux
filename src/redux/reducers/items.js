//users reducer
const items = [];
export default (state = items, action) => {
	switch(action.type){
		case "ADD_ITEM" :
            return [...state, action.items];
        default: 
			return state;
	}
};