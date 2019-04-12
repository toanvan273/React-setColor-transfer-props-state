import React, { Component } from 'react';
import './App.css'
import SetColor from './components/setColor'
import SetFont from './components/SetFont'
import Result from './components/Result'
import Reset from './components/Reset'
class App extends Component {

  render() {
    return (
    
      <div className="container">
        <div className="row">
           <SetColor />
            <SetFont/>
        </div>

        <div className="row">
           <Result />
            <Reset />
        </div>
      </div>
    );
  }
}

export default App;
