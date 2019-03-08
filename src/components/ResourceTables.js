import React from "react";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';

/* style components */
import { Container } from "./styles/style_Base";
const USERS = "users";
const POSTS = "posts";
const TODOS = "todos";

const arrTables = [USERS, POSTS, TODOS];
class ResourceTables extends React.Component{
	constructor(props){
        super(props);
        this.state = {
        
        }
    }
    
    tableOptions = () => {
        return arrTables.map((option, index) => (
            <option key={index} value={option}>{option}</option>
        ));
    }

	render(){
		return(
			<section id="resource_tables">
				<Container>
                    <h3>Match tables</h3>
                    <form>
                        <select>
                            {this.tableOptions()}
                        </select>
                        <select>
                            {this.tableOptions()}
                        </select>
                    </form>
				</Container>
			</section>
		)
	}
}

/* const mapStateToProps = (state, props) => {    
	return {
	};
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
    },dispatch)
};
export default connect(,)(); */

export default ResourceTables;
