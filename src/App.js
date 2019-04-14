import React, { Component } from 'react';
import './App.css'
import Form from './Form'

class App extends Component {

  render() {
    return (
      <div className="container">
        
        <div className="panel panel-info">
            <div className="panel-heading">
              <h3 className="panel-title">Form</h3>
            </div>
            <div className="panel-body">
            <Form />
             


            </div>
        </div>
        
      </div>
    );
  }
}

export default App;
