import React from 'react';

const Button = props => {
    return (
        <div className="button-container">
            <button 
                className="clear" 
                id="clear"
                value="C"
                onClick={props.cleared}>C</button>
            <button 
                className="btn-operator" 
                id="divide"
                value="/"
                onClick={props.operator}>/</button>
            <button 
                className="btn-operator" 
                id="multiply"
                value="*"
                onClick={props.operator}>X</button>
            <button 
                className="btn-operator" 
                id="add"
                value="+"
                onClick={props.operator}>+</button>
            <button 
                className="btn-operator" 
                id="subtract"
                value="-"
                onClick={props.negative}>-</button>
            <button 
                className="btn-number" 
                id="nine"
                value="9"
                onClick={props.number}>9</button>
            <button 
                className="btn-number" 
                id="eight"
                value="8"
                onClick={props.number}>8</button>
            <button 
                className="btn-number" 
                id="seven"
                value="7"
                onClick={props.number}>7</button>
            <button 
                className="btn-number" 
                id="six"
                value="6"
                onClick={props.number}>6</button>
            <button 
                className="btn-number" 
                id="five"
                value="5"
                onClick={props.number}>5</button>
            <button 
                className="btn-number" 
                id="four"
                value="4"
                onClick={props.number}>4</button>
            <button 
                className="btn-number" 
                id="three"
                value="3"
                onClick={props.number}>3</button>
            <button 
                className="btn-number" 
                id="two"
                value="2"
                onClick={props.number}>2</button>
            <button 
                className="btn-number" 
                id="one"
                value="1"
                onClick={props.number}>1</button>
            <button 
                className="btn-number" 
                id="zero"
                value="0"
                onClick={props.number}>0</button>
            <button 
                className="btn-equals" 
                id="equals"
                value="="
                onClick={props.equals}>=</button>
            <button 
                className="btn-decimal" 
                id="decimal"
                value="."
                onClick={props.decimal}>.</button>

        </div>
        
    )
}

export default Button;