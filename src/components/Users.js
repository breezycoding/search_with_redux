import React from "react";

/* style components */
import { Container } from "./styles/style_Base";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllUsers } from './../redux/actions/getAllUsers';
import { selectedUser } from './../redux/actions/selectedUser';
import { User } from './User';


class Users extends React.Component{
	constructor(props){
        super(props);
        this.state = {
            selectedId: null
        }
    }
    
    componentWillMount(){
        this.props.getAllUsers();
    }

    optionIdChange = (event) => {
        let ArrId = event.target.value - 1;
        this.props.selectedUser(this.props.users[ArrId]);
    }

	render(){
		return(
			<section id="users">
				<Container>
                    <p>Search user</p>
                    <select onChange={this.optionIdChange}>
                        {
                            Object.keys(this.props.users).map((i) => (
                                <option key={this.props.users[i].id} value={this.props.users[i].id}>{this.props.users[i].id}</option>
                                )
                            )
                        }
                    </select>
                    {
                        (() => {
                            if(Object.keys(this.props.currentUser).length !== 0){
                                return <User {...this.props.currentUser}/>;
                            }else{
                                return Object.keys(this.props.users).map((index) => {
                                    return(<User key={this.props.users[index].id} {...this.props.users[index]}/>);
                                });
                            }
                        })()
                    }
				</Container>
			</section>
		)
	}
}

const mapStateToProps = (state, props) => {
    return{
        users: state.users,
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getAllUsers,
        selectedUser
    },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
