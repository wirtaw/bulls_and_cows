/**
 * Created by wirtaw on 08.12.16.
 */
import React, { Component } from 'react';
import './Form.css';
import InputNumber from './InputNumber';

class Form extends Component {
    render() {
        return (
            <div id="gameForm">
                <form>
                    <InputNumber/>
                </form>
            </div>
        );
    }
}

export default Form;