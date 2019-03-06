import React from "react";

/* style components */
import { Container } from "./styles/style_Base";
import { connect } from 'react-redux';
import { compose } from "redux";

import { Todo } from "./Todo";
import * as todosActions from './../redux/actions/getAllTodos';


class Todos extends React.Component{
	constructor(props){
        super(props);
        this.state = {
            todoCompleted: ""
        }
    }

    componentDidMount(){
        this.props.getAllTodosAction();
    }

    flattenArray = (arrElem) => {
        return [].concat.apply([], arrElem);
    }

    onChangeCompletedValues = (optionValue, boolCompleted) => {
        this.setState({
            [optionValue]: boolCompleted
        });
    }

    todosList = () => {
        if(this.state.todoCompleted === ""){
            return Object.keys(this.flattenArray(this.props.getAllTodos)).map((indexAll) => (
                <Todo key={indexAll}  {...this.flattenArray(this.props.getAllTodos)[indexAll]}/>
            ))
        }else{
            const filteredKeys = Object.keys(this.flattenArray(this.props.getAllTodos)).filter(indexFilter => 
                this.flattenArray(this.props.getAllTodos)[indexFilter].completed === this.state.todoCompleted
            )
            return filteredKeys.map((indexMap) => {
               return(
                <Todo key={indexMap} {...this.flattenArray(this.props.getAllTodos)[indexMap]}/>
               )
            });
        }
    }

	render(){
        //console.log(this.flattenArray(this.props.getAllTodos));
		return(
			<section id="todos">
				<Container>
                    <form onKeyPress={this.onSubmitTodos}>
                        <input 
                            type="radio"
                            name="completed"
                            value={this.state.todoCompleted}
                            onChange={ () => this.onChangeCompletedValues("todoCompleted", true)}
                         />{""}yes
                         <input 
                            type="radio"
                            name="completed"
                            value={this.state.todoCompleted}
                            onChange={ () => this.onChangeCompletedValues("todoCompleted", false)}
                         />{""}no
                         <input 
                            type="radio"
                            name="completed"
                            value={this.state.todoCompleted}
                            onChange={ () => this.onChangeCompletedValues("todoCompleted", "")}
                         />{""}show all
                    </form>
                    {this.todosList()}
				</Container>
			</section>
		)
	}
}

const mapStateToProps = (state) => {
    return{
        getAllTodos: state.getAllTodos
    }
}
export default compose(
    connect(mapStateToProps, todosActions),
)(Todos);