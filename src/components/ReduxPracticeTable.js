import React from "react";

const ReduxPracticeTable = (props) => {
	return(
		<tr key={props.id}>
			<td>{props.id}</td>
			<td>{props.title}</td>
			<td>{props.body}</td>
		</tr>
	);
}

export default ReduxPracticeTable;