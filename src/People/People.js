import React from 'react'
import './People.css';

const People= (props)=>{
    return (
        <div className='peeps' onClick={props.click} > 
            <p>Hi! I am {props.name}. My age is {props.age}.</p>
            <p>{props.children}</p> 
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
}

export default People;