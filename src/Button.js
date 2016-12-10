/**
 * Created by wirtaw on 08.12.16.
 */
import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

class Button extends Component {
    constructor(props) {
        super(props);
        this.handleOptionsClickButton = this.handleOptionsClickButton.bind(this);
        this.state = {processed:true,count:0};
    }
    componentDidMount() {

    }
    handleOptionsClickButton(e) {
        let num = this.state.count;
        num++;
        this.setState({count:num});
    }
    render() {
        return (
            <div className="inputButton">
                <button type="button" name="clickButton" id="clickButton" onClick={this.handleOptionsClickButton}>Input</button>
            </div>
        );
    }
}

export default Button;