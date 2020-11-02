import React from 'react';


const display = props => {
    return (
        <div className="display-container">
            <p>{props.formula}</p> 
            <p className="result" id="display">{props.value}</p>
        </div>
    )
}

export default display;