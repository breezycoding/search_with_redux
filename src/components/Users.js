import React from "react";

/* style components */
import { Container } from "./styles/style_Base";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllUsers } from './../redux/actions/getAllUsers';
import { selectedUser } from './../redux/actions/selectedUser';


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

    currentUser = () => {
        const { id, name, username, email, address, phone, website, company} = this.props.currentUser;
        const { street, suite, city, zipcode} = address;
        const {companyName, catchPhrase, bs} = company;
        return(
            <div>
                <p>id: {id}</p>
                <p>name: {name}</p>
                <p>username: {username}</p>
                <p>email: {email}</p>
                <p>address: {suite} {street} {city} {zipcode}</p>
                <p>phone: {phone}</p>
                <p>website: {website}</p>
                <p>company name: {companyName}</p>
                <p>catchPhrase: {catchPhrase}</p>
                <p>bs: {bs}</p>
            </div>
        );
    }

	render(){
        console.log(this.props.currentUser);
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
                        Object.keys(this.props.currentUser).length !== 0 && this.currentUser()
                    }
				</Container>
			</section>
		)
	}
}

const mapStateToProps = (state, props) => {
    console.log(state);
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
