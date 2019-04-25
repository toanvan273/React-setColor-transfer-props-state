import React, { Component } from 'react';
import './App.css'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            fruitName: ''
        }
        this.onHandleChange = this.onHandleChange.bind(this)
        this.onHandleSubmit = this.onHandleSubmit.bind(this)
    }
    onHandleChange (e){
        // let target = e.target
        // let name = target.name
        // let value = target.value
        this.setState({
            fruitName: e.target.value
        })
    }
    onHandleSubmit(value){
        value.preventDefault()
    }
  render() {
      console.log('A',this.state.fruitName);
      
    return (
    <div className="container">
        <form onSubmit={this.onHandleSubmit}>
            <label>Trái cây: </label> 
            <select onChange={ this.onHandleChange } name="fruitName">
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option selected value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>
            <button type="submit" className="btn btn-danger">Submit</button>
        </form>
    </div>
    );
  }
}

export default App;
