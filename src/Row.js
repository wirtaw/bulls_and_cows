/**
 * Created by wirtaw on 08.12.16.
 */
import React, { Component } from 'react';
import Cell from './Cell';

class Row extends Component {
    render() {
        return (
            <tr className="eachRow">
                <Cell cellData={{
                    type: "nr",
                    value: this.props.stat.nr,
                    id: this.props.stat.id
                }}/>
                <Cell cellData={{
                    type: "number",
                    value: this.props.stat.number,
                    id: this.props.stat.id
                }}/>
                <Cell cellData={{
                    type: "info",
                    value: this.props.stat.info,
                    id: this.props.stat.id
                }}/>
                <Cell cellData={{
                    type: "points",
                    value: this.props.stat.points,
                    id: this.props.stat.id
                }}/>
            </tr>
        );
    }
}

export default Row;