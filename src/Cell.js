/**
 * Created by wirtaw on 08.12.16.
 */
import React, { Component } from 'react';

class Cell extends Component {
    render() {
        return (
            <td name={this.props.cellData.type} id={this.props.cellData.id}>
                {this.props.cellData.value}
            </td>
        );
    }
}

export default Cell;