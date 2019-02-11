import React from "react";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import { searchApi } from "../redux/actions/SearchWithRedux";
import { searchString } from "../redux/actions/searchString";
import SearchWithReduxTable from './SearchWithReduxTable';

/* style components */
import { Container } from "./styles/style_Base";
import { InputSearch, InputSearchContainer, TableSearchResults, TableSearchResultsHead } from "./styles/style_SearchWithRedux";

class SearchWithRedux extends React.Component{
	constructor(props){
        super(props);
        this.state = {
            searchPost:"",
            searchTitle: "", 
            allApiData:[]
        }
	}

	componentDidMount(){
        this.getAllApiData();
    }

	getAllApiData = () => {
		const status = response => {
			if (response.status >= 200 && response.status < 300) {
				console.log("response.status:", response.status);
				//return the data from fetch 
				return Promise.resolve(response)
			}else
				console.log("response.status:", response.status);

			//returns error in catch
			return Promise.reject(new Error(response.statusText))
		}

		fetch("https://jsonplaceholder.typicode.com/posts")
			.then(status)
			.then(response => response.json())
			.then(data => {
                if(data.length > 0){
                    this.setState((previousState) => {
                        return{
                            allApiData:previousState.allApiData.concat(data)
                        } 
                    });
                }
			})
			.catch(error => {
				console.log("api error: ", error);
            });
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
        return this.state.allApiData && this.state.allApiData.filter(data => {
            if(data[apiKey]){
                return data[apiKey].indexOf(toSearchValue) !== -1;
            }else
                console.log("invalid api key");
        });
    }

    submitPostSearch = (event) => {
        if(this.ifKeyCode(event) == 13) {
            this.props.searchApi(this.filterApi("body", event.target.value));
            this.props.searchString(event.target.value);
        }
        
    }

    submitTitleSearch = (event) => {
        if(this.ifKeyCode(event) == 13){
            this.props.searchApi(this.filterApi("title", event.target.value));
            this.props.searchString(event.target.value);
        }
    }

	render(){
		return(
			<section id="main">
				<Container>
                    <InputSearchContainer>
                        <InputSearch 
                            type="text" 
                            onChange={this.searchPostOnChange} 
                            value={this.state.searchPost}
                            onKeyPress={this.submitPostSearch}
                            placeholder="SEARCH BY POST"
                        >
                        </InputSearch>
                        <InputSearch
                            type="text"
                            onChange={this.searchTitleOnChange}
                            value={this.state.searchTitle}
                            onKeyPress={this.submitTitleSearch}
                            placeholder="SEARCH BY TITLE"
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
                                <SearchWithReduxTable key={index} {...post}/>
                            )
                        }
                        {
                            this.props.posts.length === 0 &&
                                this.state.allApiData.map((post, index) => 
                                    <SearchWithReduxTable key={index} {...post}/>
                                )
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
        searchWord: state.searchWord
	};
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        searchApi,
        searchString
    },dispatch)
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchWithRedux);