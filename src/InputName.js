/**
 * Created by wirtaw on 08.12.16.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class InputName extends Component {
    constructor(props) {
        super(props);
        this.handleOptionsInputName = this.handleOptionsInputName.bind(this);
        this.state = {
            value: 'Welcome {{name}} to "Bulls and cows" game!',
            name: ''};
    }
    componentDidMount() {

    }
    handleOptionsInputName(e) {
        let visitor_name = document.getElementById('title-nav');
        let game_Form = document.getElementById('gameForm');
        let game_Table = document.getElementById('gameTable');
        let button = document.getElementById('button-click');
        let title = this.state.value;
        if ('undefined' !== typeof visitor_name) {
            this.setState({name:e.target.value});
            let visitorDOM = ReactDOM.findDOMNode(visitor_name);
            let gameFormDOM = ReactDOM.findDOMNode(game_Form);
            let gameTableDOM = ReactDOM.findDOMNode(game_Table);
            let buttonDOM = ReactDOM.findDOMNode(button);
            if ('' === e.target.value) {
                title = title.replace('{{name}}', '');
                if ('undefined' !== typeof gameFormDOM) {
                    gameFormDOM.style = 'display:none;';
                }
                if ('undefined' !== typeof gameTableDOM) {
                    gameTableDOM.style = 'display:none;';
                }
                if ('undefined' !== typeof buttonDOM) {
                    buttonDOM.style = 'display:none;';
                }
            } else {
                title = title.replace('{{name}}', e.target.value);
                if ('undefined' !== typeof gameFormDOM) {
                    gameFormDOM.style = 'display:block;';
                }
                if ('undefined' !== typeof gameTableDOM) {
                    gameTableDOM.style = 'display:block;';
                }
                if ('undefined' !== typeof buttonDOM) {
                    buttonDOM.style = 'display:block;';
                }
            }
            visitorDOM.innerHTML = title;
        }
    }
    render() {
        return (
            <div className="inputName">
                <label htmlFor="visitorName">Your name</label>
                <input type="text" name="visitorName" id="visitorName" onChange={this.handleOptionsInputName}/>
            </div>
        );
    }
}

export default InputName;