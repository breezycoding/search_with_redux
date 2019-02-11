import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import SearchWithRedux from "../components/SearchWithRedux";

const App_router = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" component={SearchWithRedux} exact={true}/>
		</Switch>	
	</BrowserRouter>
);

export default App_router;