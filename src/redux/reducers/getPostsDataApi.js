const defaultState = {};

export default (state = defaultState, action) => {	
	switch(action.type){
		case "GET_POST_DATA":
			return [...state, ...action.data.data]; 
		default: 
			return state;
	}
};