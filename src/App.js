import React, { Component } from 'react';
import './App.css'
import Toolbar from './components/Toolbar/Toolbar'
import Sider from './components/Sider/Sider'
import Backdrop from './components/Backdrop/Backdrop'

class App extends Component {
    state = {
        siderOpen: false
    }
    toggleClick = () => {
        this.setState({
            siderOpen: !this.state.siderOpen
        })
    }
    backdropClick = () => {
        this.setState({
            siderOpen: false
        })
    }
    render() {
        let  backdrop
        if(this.state.siderOpen){
            backdrop = <Backdrop backdropClick={this.backdropClick}/>
        }
    return (
        <div style={{height: '100%'}}>
        <Toolbar toggleClick={this.toggleClick}/> 
        <Sider show={this.state.siderOpen} toggleClick={this.toggleClick}/>
        {backdrop}
        <main style={{marginTop: 65}}>
        <p>Page Content</p>    
        </main>  
        
        </div>
    );
    }
}

export default App;
