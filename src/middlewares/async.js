/* this is the signature of middleware and how its done. first it returns a function that gets called with dispatch */
export default ({ dispatch }) => {
    /* 
         then it calls function(next) then calls another function(action). the second function contains the action, thats the action we might dispatch from action creator
    */
    return next => action => {
        /*this is the case when we have different action creators that doesnt have promises. we do the code below in this scenario
        if action does not contain payload/data or if payload does not have .then property, we dont care about it, just send it on*/
        if(!action.payload || !action.payload.then){
            /*push it to the next middleware*/
            return next(action);
        }
        console.log("we have a promise:", action);
        /*we cancel the promise by removing 'next(action)'*/
        /* 
            next means send this action to the next middleware stack if we dont have any other middleware its going to be forwarded to reducers
        */

        //for data verification in response.status
        const status = (response) => {
			if (response.status >= 200 && response.status < 300) {
				console.log("response.status:", response.status);
				//return the data from fetch 
				return Promise.resolve(response)
			}else
				console.log("response.status:", response.status);

			//returns error in catch
			return Promise.reject(new Error(response.statusText))
		}
        //for data verification in response.status
        
        //steps to take to resolve ouf promise
        //1. Make sure the action's promise resolves
        action.payload
            .then(status)
            .then(response => {
                //2.create a new action with old type, but replace the promise with the response data not the promise
                const newAction = {...action, payload: response};
                //3.dispatch sends a brand new action to reducer
                dispatch(newAction);
                //dispatch is creating brand new actions that will be sent to reducer, next is sending the action to the next middleware
            }).catch(error => {
				console.log("api error: ", error);
            });
    
        
        //next(action);
    }
}