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
        let title = this.state.value;
        if ('undefined' !== typeof visitor_name && '' !== e.target.value) {
            this.setState({name:e.target.value});
            let visitorDOM = ReactDOM.findDOMNode(visitor_name);
            if ('' === e.target.value) {
                title = title.replace('{{name}}', '');
            } else {
                title = title.replace('{{name}}', e.target.value);
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