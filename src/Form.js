/**
 * Created by wirtaw on 08.12.16.
 */
import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div className="Form">
                <form>
                    <label htmlFor="visitorName">Your name</label>
                    <input type="text" name="visitorName" id="visitorName"/>
                </form>
            </div>
        );
    }
}

export default Form;