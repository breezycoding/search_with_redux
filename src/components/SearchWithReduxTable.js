import React from "react";
import { TableSearchResultsData } from "./styles/style_SearchWithRedux";

const SearchWithRedux = (props) => {
	return(
		<tr key={props.id}>
			<TableSearchResultsData>{props.id}</TableSearchResultsData>
			<TableSearchResultsData>{props.title}</TableSearchResultsData>
			<TableSearchResultsData>{props.body}</TableSearchResultsData>
		</tr>
	);
}

export default SearchWithRedux;