import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FormName from './FormName';
import Form from './Form';
import Table from './Table';

class App extends Component {
    constructor(props) {
        super(props);
        this.handleAddEvent = this.handleAddEvent.bind(this);
        this.handleStatTable = this.handleStatTable.bind(this);

        // Must initialize state first
        this.state = {
            counter: 0,
            p: 1000,
            number: '',
            stats: [
                {
                    id: 1,
                    nr: 1,
                    number: '',
                    info: '',
                    points: 1000
                }
            ]
        };
    }
    componentDidMount() {
        this.setState({number:generateNumber()});
    }
    handleAddEvent(evt) {
        let counter = this.state.counter;
        let p = this.state.p;
        let stats = this.state.stats;
        let visitorNumber = document.getElementById('visitorNumber');
        let button = document.getElementById('button-click');
        let value = null;
        if ('undefined' !== typeof visitorNumber) {
            let visitorDOM = ReactDOM.findDOMNode(visitorNumber);
            value = visitorDOM.value;
        }

        if (p > 0 && (null !== value || '' !== value)) {
            counter += 1;
            p -= 10*counter;
            let id = counter+1;
            let obj = getInfo(value, this.state.number);
            let stat = {
                id: id,
                nr: id,
                number: value,
                info: obj.text,
                points: p
            };
            stats.push(stat);
            this.setState({stats:stats});

            this.setState({counter:counter});
            this.setState({p:p});

            let buttonDOM = ReactDOM.findDOMNode(button);
            if (true === obj.finish && 'undefined' !== typeof buttonDOM) {
                buttonDOM.style = 'display:none;';
            }
        }


    }

    handleStatTable(evt) {
        let item = {
            id: evt.target.id,
            nr: evt.target.nr,
            number: evt.target.number,
            info: evt.target.info,
            points: evt.target.points
        };
        let stats = this.state.stats;

        let newStats = stats.map(function(stat) {
            for (let key in stat) {
                if (key === item.nr && stat.id === item.id) {
                    stat[key] = item.value;

                }
            }
            return stat;
        });
        this.setState(newStats);
    };
  render() {
    return (
      <div className="container">
            <div className="page-header">
                <h1 id="title-nav">Welcome to "Bulls and cows" game!</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <FormName />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3 col-sm-3">
                        <Form />
                    </div>
                    <div className="col-md-9 col-sm-9">
                        <button type="button" id="button-click" onClick={this.handleAddEvent}
                                className="btn btn-default btn-sm"><span className="glyphicon glyphicon-fire"></span> Spell</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Table onStatTableUpdate={this.handleStatTable} onRowAdd={this.handleAddEvent} stats={this.state.stats}/>
                    </div>
                </div>

            </div>
            <div id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                            Source code: <br/>
                            <a href="https://github.com/wirtaw/bulls_and_cows">Github</a> or <a href="https://bitbucket.org/wirtaw/react_bulls_and_cows">Bitbucket</a><br/>
                            <a href="./../index.html"> main</a>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    );
  }
}

export default App;

function generateNumber() {
    let number = '0123';
    let mas = [];
    let value = getRandomInt(0, 9);
    mas.push(value);
    while (4 > mas.length ) {
        value = getRandomInt(0, 9);
        if (-1 !== mas.indexOf(value)) {
            while (-1 !== mas.indexOf(value)) {
                value = getRandomInt(0, 9);
            }
        }
        mas.push(value);
    }
    number = mas.join('');
    return number;
}

function getRandomInt(min, max) {
    //From http://javascript.ru/Math.random
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getInfo(value, number) {
    let pos = 0;
    let sp = 0;

    let result = {};

    if (number[0] === value[0]) {
        pos += 1;
        sp += 1;
    } else if (number[1] === value[0]) {
        sp += 1;
    } else if (number[2] === value[0]) {
        sp += 1;
    } else if (number[3] === value[0]) {
        sp += 1;
    }

    if (number[0] === value[1]) {
        sp += 1;
    } else if (number[1] === value[1]) {
        pos += 1;
        sp += 1;
    } else if (number[2] === value[1]) {
        sp += 1;
    } else if (number[3] === value[1]) {
        sp += 1;
    }

    if (number[0] === value[2]) {
        sp += 1;
    } else if (number[1] === value[2]) {
        sp += 1;
    } else if (number[2] === value[2]) {
        sp += 1;
        pos += 1;
    } else if (number[3] === value[2]) {
        sp += 1;
    }
    if (number[0] === value[3]) {
        sp += 1;
    } else if (number[1] === value[3]) {
        sp += 1;
    } else if (number[2] === value[3]) {
        sp += 1;
    } else if (number[3] === value[3]) {
        sp += 1;
        pos += 1;
    }

    result.text = ' ' + sp + ' ' + pos + '';
    result.finish = false;
    if (sp === pos && pos === 4) {
        result.finish = true;
        return result;
    } else {
        return result;
    }
}