import React, { Component } from 'react';
import './App.css'
import SetColor from './components/setColor'
import SetFont from './components/SetFont'
import Result from './components/Result'
import Reset from './components/Reset'
class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            color : 'red',
            fontSize: 16,
        }
    }
    toGetColor = (param) => {
        this.setState({
            color: param
        })
    }
    togetFont = (param) => {
        if(this.state.fontSize + param >= 8 && this.state.fontSize + param <= 36 ){
            this.setState({
                fontSize: this.state.fontSize + param
            })
        }
        
    }
    toReset = (x) => {
        if(x){
            this.setState({
                color : 'red',
                fontSize: 16,
            })
        }
    }
  render() {
    return (
    
      <div className="container">
        <div className="row">
           <SetColor color={this.state.color} getColor={this.toGetColor}/>
            <SetFont fontSize={this.state.fontSize} getFont={this.togetFont}/>
        </div>

        <div className="row">
           <Result color={this.state.color} fontSize={this.state.fontSize}/>
            <Reset toReset={this.toReset}/>
        </div>
      </div>
    );
  }
}

export default App;
