import React from "react";

export const User = (props) => {
    const { id, name, username, email, address, phone, website, company} = props;
    const { street, suite, city, zipcode} = address;
    const {companyName, catchPhrase, bs} = company;
    return(
        <div>
            <fieldset>
                <legend>user id: {id}</legend>
                <p>name: {name}</p>
                <p>username: {username}</p>
                <p>email: {email}</p>
                <p>address: {suite} {street} {city} {zipcode}</p>
                <p>phone: {phone}</p>
                <p>website: {website}</p>
                <p>company name: {companyName}</p>
                <p>catchPhrase: {catchPhrase}</p>
                <p>bs: {bs}</p>
            </fieldset>
        </div>
    );
}