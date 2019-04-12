import React, { Component } from 'react';
import './App.css'
import SetColor from './components/setColor'
import SetFont from './components/SetFont'
import Result from './components/Result'
class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            color : 'red',
            fontSize: '16px'
        }
    }
    toGetColor = (param) => {
        this.setState({
            color: param
        })
    }
    togetFont = (param) => {
        
    }
  render() {
    return (
    
      <div className="container">
        <div className="row">
           <SetColor color={this.state.color} getColor={this.toGetColor}/>
            <SetFont font={this.state.fontSize} getFont={this.togetFont}/>
        </div>

        <div className="row">
           <Result color={this.state.color}/>
            <div className="col-md-6">6</div>
        </div>
      </div>
    );
  }
}

export default App;
