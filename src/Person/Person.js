import React from 'react';

const Person = (props) => {
    return (
        <div>
            <p>{props.children}</p>
            <p>I´m {props.name} and I´m {props.age} years old.</p>
            <p>A random Person is {Math.floor(Math.random() * 30)} years old.</p>
        </div>
    )
};

export default Person;