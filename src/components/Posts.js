import React from "react";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import { searchApi } from "../redux/actions/SearchWithRedux";
import { searchString } from "../redux/actions/searchString";
import { getPostsDataApi } from "../redux/actions/getPostsDataApi";
import Post from './Post';

/* style components */
import { Container } from "./styles/style_Base";
import { InputSearch, InputSearchContainer, TableSearchResults, TableSearchResultsHead } from "./styles/style_SearchWithRedux";

class Posts extends React.Component{
	constructor(props){
        super(props);
        this.state = {
            searchPost:"",
            searchTitle: ""
        }
	}

	componentWillMount(){
        this.props.getPostsDataApi();
    }

    searchPostOnChange = (event) => {
        this.setState({
            searchPost:event.target.value,
            searchTitle: ""
        });
    }

    searchTitleOnChange = (event) => {
        this.setState({
            searchTitle:event.target.value,
            searchPost: ""
        });
    }

    ifKeyCode = (event) => (event.keyCode ? event.keyCode : event.which);

    filterApi = (apiKey, toSearchValue) => {
        return this.props.postsData && this.props.postsData.filter(data => {
            if(data[apiKey]){
                return data[apiKey].indexOf(toSearchValue) !== -1;
            }else
                console.log("invalid api key");
        });
    }

    submitPostSearch = (event) => {
        if(this.ifKeyCode(event) == 13) {
            this.props.searchApi(this.filterApi("body", event.target.value));
            this.props.searchString({searchKey:"postSearch" ,searchValue:event.target.value});
        }
    }

    submitTitleSearch = (event) => {
        if(this.ifKeyCode(event) == 13){
            this.props.searchApi(this.filterApi("title", event.target.value));
            this.props.searchString({searchKey:"titleSearch", searchValue:event.target.value, });   
        }
    }

	render(){
		return(
			<section id="main">
				<Container>
                    <InputSearchContainer>
                        <InputSearch
                            type="text"
                            onChange={this.searchTitleOnChange}
                            value={this.state.searchTitle}
                            onKeyPress={this.submitTitleSearch}
                            placeholder="SEARCH BY TITLE"
                        >
                        </InputSearch>
                        <InputSearch 
                            type="text" 
                            onChange={this.searchPostOnChange} 
                            value={this.state.searchPost}
                            onKeyPress={this.submitPostSearch}
                            placeholder="SEARCH BY POST"
                        >
                        </InputSearch>
                    </InputSearchContainer>
                    <TableSearchResults>
                        <thead>
                            <tr>
                                <TableSearchResultsHead>ID</TableSearchResultsHead>
                                <TableSearchResultsHead>TITLE</TableSearchResultsHead>
                                <TableSearchResultsHead>POST</TableSearchResultsHead>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.posts && this.props.posts.map((post, index) => 
                                <Post key={index} {...post}/>
                            )
                        }
                        {
                            this.props.posts.length === 0 && 
                                Object.keys(this.props.postsData).map((i) =>{
                                    return(<Post key={i} {...this.props.postsData[i]}/>)
                                })
                        }
                        </tbody>
                    </TableSearchResults>
				</Container>
			</section>
		)
	}
}

const mapStateToProps = (state, props) => {    
	return {
        posts: state.posts, 
        postsData: state.postsData
	};
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        searchApi,
        searchString,
        getPostsDataApi
    },dispatch)
};
export default connect(mapStateToProps, mapDispatchToProps)(Posts);
