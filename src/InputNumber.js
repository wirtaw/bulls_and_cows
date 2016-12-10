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
            name: ''};
    }
    componentDidMount() {

    }
    handleOptionsInputNumber(e) {

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