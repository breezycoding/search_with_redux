import React from "react";

/* style components */
import { Container } from "./styles/style_Base";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllUsers } from './../redux/actions/getAllUsers';


class Users extends React.Component{
	constructor(props){
        super(props);
    }
    
    componentDidMount(){
        this.props.getAllUsers();
    }


	render(){
        console.log(this.props.users);
		return(
			<section id="users">
				<Container>
                    <select>
                        <option>Option</option>
                    </select>
				</Container>
			</section>
		)
	}
}

const mapStateToProps = (state, props) => {
    return{
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getAllUsers
    },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
