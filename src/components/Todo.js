import React from "react";

export const Todo = (props) => {
    let completed = props.completed ? "true" : "false";
    return(
        <div>
            <fieldset>
                <legend>todo # {props.id}</legend>
                <p>userId: {props.userId}</p>
                <p>todo: {props.title}</p>
                <p>completed: {completed}</p>
            </fieldset>
        </div>
        
    );
}