import React from "react";
import { connect } from "react-redux";
/* styled components */
import { TableSearchResultsData } from "./styles/style_SearchWithRedux";
import SearchString from "./SearchString";

class SearchWithReduxTable extends React.Component{
	constructor(props){
        super(props);
        this.state = {
        }
	}

	render(){
		return(
			<tr key={this.props.id}>
				<TableSearchResultsData>{this.props.id}</TableSearchResultsData>
				<TableSearchResultsData>{this.props.title}</TableSearchResultsData>
				<TableSearchResultsData>
					{!this.props.searchWord && (<div>{this.props.body}</div>)}
					{this.props.searchWord && (<SearchString {...this.props}/>)}
				</TableSearchResultsData>
			</tr>
		)
	}
}

const mapStateToProps = (state, props) => {    
	return {
        searchWord: state.searchWord
	};
};

export default connect(mapStateToProps, null)(SearchWithReduxTable);
