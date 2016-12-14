/**
 * Created by wirtaw on 08.12.16.
 */
import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

class InputNumber extends Component {
    constructor(props) {
        super(props);
        this.handleOptionsInputNumber = this.handleOptionsInputNumber.bind(this);
        this.state = {
            value: '0000',
            name: '',
            counter: 0,
            spell: 0,
            points: 1000
        };
    }
    componentDidMount() {

    }
    handleOptionsInputNumber(e) {
        let value = e.target.value;
        let count = value.length;
        let counter = this.state.counter;
        let spell = this.state.spell;
        //let game_Table = document.getElementById('gameTable');
        if ( 4 === count) {
            counter++;
            this.setState({counter:counter});
            let check_diff = checkDiff(value);
            if (true === check_diff) {
                spell++;
                this.setState({spell:spell});
                //let gameTableDOM = ReactDOM.findDOMNode(game_Table);

                //console.log(' Play ',spell);
                //console.log(' gameTableDOM ',gameTableDOM);
                //http://stackoverflow.com/questions/36651583/dynamically-add-child-components-in-react
            }
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