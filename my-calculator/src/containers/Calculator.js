import React, { Component } from 'react';
import Display from '../components/Display';
import Button from '../components/Button';
import stringMath from 'string-math';

class Calculator extends Component {
    state = {
        currentValue: '',
        formula: [],
        operators: []
    }

    numberClickHandler = (e) => {
        if (this.state.formula.length === 0 && e.target.value === '0') {
            return
        } else {
                this.setState({
                    currentValue: this.state.currentValue.concat(e.target.value).replace(/^0/, ''),
                    formula: this.state.formula.concat(this.state.operators, e.target.value),
                    operators: []})
            }
        }
                    
    operatorHandler = (e) => {
        if (this.state.operators.length >= 1 && e.target.value !== '-') {
            let newOperators = [e.target.value]
            this.setState({ operators: newOperators, currentValue: ''})
        } else {
            this.setState({operators: this.state.operators.concat(e.target.value), currentValue: ''})
        }

                       
    }

    negativeHandler = () => {
        this.setState({
            currentValue: '',
            operators: this.state.operators.concat('-')})
    }

    decimalHandler = () => {
        if (this.state.currentValue.includes('.')) {
            return
        } else {
            this.setState({ 
                formula: this.state.formula.concat('.'),
                currentValue: this.state.currentValue.concat('.') })
        }
    }

    equalsHandler = () => {
        
        if (this.state.formula.length > 0) {
            const evaluatedFormula = stringMath([...this.state.formula].join('').replace(/^[+*\/]/, ''));
            this.setState({
                currentValue: evaluatedFormula, 
                formula: [evaluatedFormula],
            })
        }
        
    }

    clearHandler = () => {
        this.setState({
            // prevValue: '0',
            currentValue: '0',
            formula: [],
            operators: []
        })
    }
    render () {

        return (
            <div className="calculator">
                <Display 
                    value={this.state.currentValue}
                    formula={this.state.formula} />
                <Button 
                    number={(e) => this.numberClickHandler(e)}
                    operator={(e) => this.operatorHandler(e)}
                    equals={this.equalsHandler}
                    decimal={this.decimalHandler}
                    negative={this.negativeHandler}
                    cleared={this.clearHandler} />
            </div>
        )
    }
}
export default Calculator;