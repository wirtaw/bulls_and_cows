/**
 * Created by wirtaw on 08.12.16.
 */
import React, { Component } from 'react';
import InputName from './InputName';

class FormName extends Component {
    render() {
        return (
            <div className="Form">
                <form>
                    <InputName/>
                </form>
            </div>
        );
    }
}

export default FormName;