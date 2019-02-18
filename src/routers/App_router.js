import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import SearchWithRedux from "../components/SearchWithRedux";
import Users from "../components/Users";

const App_router = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/users" component={Users}/>
			<Route path="/posts" component={SearchWithRedux}/>	
		</Switch>	
	</BrowserRouter>
);

export default App_router;