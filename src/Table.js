/**
 * Created by wirtaw on 08.12.16.
 */
import React, { Component } from 'react';
import './Table.css';

class Table extends Component {
    render() {
        return (
            <div id="gameTable">
                <table>
                    <thead>
                        <tr>
                            <th className="tableNr">Nr</th>
                            <th className="tableNumber">Number</th>
                            <th className="tableInfo">Info</th>
                            <th className="tablePoints">Points</th>
                        </tr>
                    </thead>
                    <tbody><tr><td></td><td></td><td></td><td></td></tr></tbody>
                </table>
            </div>
        );
    }
}

export default Table;