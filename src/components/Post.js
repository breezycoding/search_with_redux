import React from "react";
import { connect } from "react-redux";
/* styled components */
import { TableSearchResultsData } from "./styles/style_SearchWithRedux";
import PostSearchString from "./PostSearchString";

class Post extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<tr key={this.props.id}>
				<TableSearchResultsData>{this.props.id}</TableSearchResultsData>
				<TableSearchResultsData>
					{
						(() => {
							if(Object.keys(this.props.searchPostStringObj).length === 0 || this.props.searchPostStringObj.searchKey === "postSearch"){
								return (<div>{this.props.title}</div>);
							}else if(this.props.searchPostStringObj.searchKey === "titleSearch"){
								return (<PostSearchString renderTitleOrBody="title" {...this.props}/>);
							}
						})()
					}
				</TableSearchResultsData>
				<TableSearchResultsData>
					{
						(() => {
							if(Object.keys(this.props.searchPostStringObj).length === 0 || this.props.searchPostStringObj.searchKey === "titleSearch"){
								return (<div>{this.props.body}</div>);
							}else if(this.props.searchPostStringObj.searchKey === "postSearch"){
								return (<PostSearchString renderTitleOrBody="body" {...this.props}/>);
							}
						})()
					}
				</TableSearchResultsData>
			</tr>
		)
	}
}

const mapStateToProps = (state, props) => {    
	return {
		searchPostStringObj: state.searchPostStringObj
	};
};

export default connect(mapStateToProps, null)(Post);
