import React, { Component } from 'react';
import './App.css'
import SetColor from './components/setColor'
import SetFont from './components/SetFont'
import Result from './components/Result'
import Reset from './components/Reset'
import Dequy from './view/Dequy'
const dataSet = [
    { label: 'Devbe', data: [] },
    {
        label: 'HRbe', data: [
            { label: 'Outside', data: [] },
            { label: 'Inside', data: [] },
            {
                label: 'Beside', data: [
                    { label: 'conty#', data: [] },
                    { label: 'trongconty', data: [] }
                ]
            },
        ]
    },
    {
        label: 'Water', data: [
            { label: 'meme', data: [] },
            { label: 'haily', data: [] },
            {
                label: 'conji', data: [
                    {
                        label: '1',
                        data: [
                            { label: '1.1', data: [] },
                            { label: '1.2', data: [] },
                            { label: '1.3', data: [] },
                        ]
                    },
                    { label: '2', data: [] },
                    {
                        label: '3', 
                        data: [
                            { label: '3.1', data: [] },
                            { label: '3.2', data: [] },
                            { label: '3.3', data: [] },
                        ]
                    },
                ]
            },
        ]
    },
]
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: 'red',
            fontSize: 16,
            name: null
        }
    }
    toGetColor = (param) => {
        this.setState({
            color: param
        })
    }
    togetFont = (param) => {
        if (this.state.fontSize + param >= 8 && this.state.fontSize + param <= 36) {
            this.setState({
                fontSize: this.state.fontSize + param
            })
        }

    }
    toReset = (x) => {
        if (x) {
            this.setState({
                color: 'red',
                fontSize: 16,
            })
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <SetColor color={this.state.color} getColor={this.toGetColor} />
                    <SetFont fontSize={this.state.fontSize} getFont={this.togetFont} />
                </div>

                <div className="row">
                    <Result color={this.state.color} fontSize={this.state.fontSize} />
                    <Reset toReset={this.toReset} />
                </div>
                <div className="row">
                    <Dequy data={dataSet} depth={0} />
                </div>
            </div>
        );
    }
}

export default App;
