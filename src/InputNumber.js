/**
 * Created by wirtaw on 08.12.16.
 */
import React, { Component } from 'react';

class InputNumber extends Component {
    constructor(props) {
        super(props);
        this.handleOptionsInputNumber = this.handleOptionsInputNumber.bind(this);
        this.state = {
            value: '0000',
            spell: 0,
        };
    }
    handleOptionsInputNumber(e) {
        let value = e.target.value;
        let count = value.length;
        let counter = this.state.counter;
        let spell = this.state.spell;
        if ( 4 === count ) {
            counter += 1;
            this.setState({counter:counter});
            let check_diff = checkDiff(value);
            if ( true === check_diff ) {
                spell += 1;
                this.setState({spell:spell});
                this.setState({value:value});
            } else {
                this.setState({value:'xxxx'});
            }
        } else {
            this.setState({value:'xxxx'});
        }
    }
    render() {
        return (
            <div className="inputNumber">
                <label htmlFor="visitorNumber">Spell number</label>
                <input type="text" name="visitorNumber" id="visitorNumber" onChange={this.handleOptionsInputNumber} maxLength="4"/>
            </div>
        );
    }
}

export default InputNumber;

function checkDiff(data) {
    let result = true;
    let number = data.trim();
    let i = 0;
    let j = 0;
    for (i = 0; i < number.length; i++) {
        for (j = 0; j < number.length; j++) {
            if (i !== j && number[j] === number[i]) {
                result = false;
                break;
            }
        }
        if (false === result) {
            break;
        }
    }
    number = parseInt(number,10);
    if (true === isNaN(number) ) {
        result = false;
    }
    return result;
}