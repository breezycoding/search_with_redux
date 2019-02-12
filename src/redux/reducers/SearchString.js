const defaultState = {};

export default (state = defaultState, action) => {	
	switch(action.type){
		case "STRING_WORD":
			return state = action.searchString; 
		default: 
			return state;
	}
};