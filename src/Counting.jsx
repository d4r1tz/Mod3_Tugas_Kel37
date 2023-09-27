import React from 'react'

export default function Counting(props) {
    return (
        <div style={{display:'inline-block'}}>
            <button onClick={props.plusEvent}>+</button>
            <p> {props.state} </p>
            <button onClick={props.minusEvent}>-</button>
        </div>
    )
}