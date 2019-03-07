const defaultState = [];

export default (state = defaultState, action) => {	
	switch(action.type){
		case "SEARCH_API" :
			//removes duplicate
			return [...new Set(action.posts)];
			/* 
				-this is the usual pattern to return reducer but we prefer to remove the duplicate with above code
				[...state, action.posts]; 
			*/
			break;
		default: 
			return state;
	}
};