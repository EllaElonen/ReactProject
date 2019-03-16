import React from 'react';
import "./Person.css"

const Person = (props) => {
    return (
        <div className="Person">
            <p>{props.children}</p>
            <p>I´m {props.name} and I´m {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
};

export default Person;