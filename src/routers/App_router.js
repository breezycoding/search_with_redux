import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ReduxPractice from "../components/ReduxPractice";

const App_router = () => (
	<BrowserRouter>
		<div>
			<Switch>
				<Route path="/" component={ReduxPractice} exact={true}/>
			</Switch>	
		</div>
	</BrowserRouter>
);

export default App_router;