import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Posts from "../components/Posts";
import Users from "../components/Users";
import Todos from "../components/Todos";
import ResourceTables from "../components/ResourceTables";

const App_router = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/users" component={Users}/>
			<Route path="/posts" component={Posts}/>	
			<Route path="/todos" component={Todos}/>
			<Route path="/resource-tables" component={ResourceTables}/>	
		</Switch>	
	</BrowserRouter>
);

export default App_router;