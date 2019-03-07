import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getAllPostsAction } from "../redux/actions/getAllPosts";
import { filter } from './../../../haystak/hs-sample/src/redux-store/reducers/filter-reducer';


class UserWithPosts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            togglePosts: false,
            userPosts: []
        }
    }

    showUserPosts = () => {
        this.props.getAllPostsAction();
        if(this.props.postsData){
            let arrUserPosts = []
            Object.keys(this.props.postsData).map(index => {
                if(this.props.postsData[index].userId === this.props.id){
                    arrUserPosts.push(this.props.postsData[index]);
                }else{
                    arrUserPosts = [];
                }
            });
            this.setState({
                togglePosts:!this.state.togglePosts,
                userPosts: arrUserPosts
            });
            
            
        }
        
    }


    render(){
        console.log(this.state.userPosts)
        return(
            <section id="user_with_posts">
                <button onClick={this.showUserPosts}>see posts for this user</button>
                {this.state.userPosts.map(userPosts => (
                        <div>
                            <div>title: {userPosts.title}</div>
                            <div>post: {userPosts.body}</div>
                        </div>
                    )
                )}
            </section>
        );
    }
}

const mapStateToProps = (state, props) => {
    return{
        postsData:state.postsData
    }
}

const mapsDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getAllPostsAction
    },dispatch)
}

export default connect(mapStateToProps, mapsDispatchToProps)(UserWithPosts);
