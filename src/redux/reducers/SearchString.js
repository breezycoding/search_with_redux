const defaultState = "";

export default (state = defaultState, action) => {	
	switch(action.type){
		case "STRING_WORD":
			return state = action.stringWord; 
		default: 
			return state;
	}
};