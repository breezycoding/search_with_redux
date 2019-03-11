import React from "react";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';

import { getAllUsers } from "../redux/actions/getAllUsers";
import { getAllPostsAction } from '../redux/actions/getAllPosts';
import { getAllTodosAction } from '../redux/actions/getAllTodos';

import {User} from "./User";

/* style components */
import { Container } from "./styles/style_Base";


const POSTS = "posts";
const TODOS = "todos";

const arrTables = [POSTS, TODOS];
class UsersResources extends React.Component{
	constructor(props){
        super(props);
        this.state = {
            userId: null,
            resources: POSTS
        }
    }

    componentDidMount(){
        this.props.getAllUsers();
        this.props.getAllPostsAction();
        this.props.getAllTodosAction();
        
    }
    
    tableOptions = () => {
        return arrTables.map((option, index) => (
            <option key={index} value={option}>{option}</option>
        ));
    }

    getUser = () => {
        if(this.props.users && this.props.users[this.state.userId - 1]){
            return(
                <User {...this.props.users[this.state.userId - 1]}/>
            );
        }
    }

    onChangeResources = (table, event) => {
        this.setState({
            [table]:event.target.value
        });
    }
 
    getResources = (resource) => {
        switch(resource){
            case POSTS: 
                return this.props.postsData;
            case TODOS: 
                return this.props.getAllTodos[0];
        }
    }

    getResourcesByUserId = (event) => {
        event.preventDefault();
        if(this.state.userId){
            Object.keys(this.getResources(this.state.resources)).map((index) => {
                if(this.getResources(this.state.resources)[index].userId === parseInt(this.state.userId)){
                    console.log(this.getResources(this.state.resources)[index]);
                }
            })
        }else{
            alert("select user id");
        }
        
    }

	render(){
		return(
			<section id="resource_tables">
				<Container>
                    <h3>Find users by resources</h3>
                    <form onSubmit={this.getResourcesByUserId}>
                        <select
                            onChange={ (event) => this.onChangeResources("userId", event)}
                            >
                            <option value="">Select user id</option>
                            {
                                this.props.users && Object.keys(this.props.users).map((index) => (
                                    <option key={index} value={this.props.users[index].id}>{this.props.users[index].id}</option>
                                ))
                            }
                        </select>
                        <select
                            onChange={ (event) => this.onChangeResources("resources", event)}
                        >
                            {this.tableOptions()}
                        </select>
                        <button>submit</button>
                    </form>
                    {this.getUser()}
				</Container>
			</section>
		)
	}
}

const mapStateToProps = (state, props) => {    
	return {
        users: state.users,
        postsData: state.postsData,
        getAllTodos: state.getAllTodos
	};
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getAllUsers,
        getAllPostsAction,
        getAllTodosAction
    },dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersResources);
