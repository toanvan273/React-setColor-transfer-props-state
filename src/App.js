import React, { Component } from 'react';
import './App.css'
import LichVanNien from './components/LichVanNien'
class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            fruitName: 'mango',
            solar: {
                day: 1,
                month: 1,
                year: 2000
            },
            lunar: {
                day: 1,
                month: 1,
                year: 2000
            }
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
      
    return (
        <>
    <div className="container">
        <form onSubmit={this.onHandleSubmit}>
            <label>Trái cây: </label> 
            <select onChange={ this.onHandleChange } defaultValue={this.state.fruitName} name="fruitName">
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option selected value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>
            <button type="submit" className="btn btn-danger">Submit</button>
        </form>
    </div> <br></br>
    <LichVanNien solar={this.state.solar} lunar={this.state.lunar}/>

    </>
    );
  }
}

export default App;
