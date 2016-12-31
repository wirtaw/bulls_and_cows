/**
 * Created by wirtaw on 08.12.16.
 */
import React, { Component } from 'react';
import './Table.css';
import Row from './Row';

class Table extends Component {

    render() {
        const stat = this.props.stats.map(function(stat) {
            return (<Row stat={stat} key={stat.id}/>)
        });
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
                    <tbody id="bodyTable">
                    {stat}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;