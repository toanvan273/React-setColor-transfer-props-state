import React, { Component } from 'react';
import './App.css'
import styled from 'styled-components'


const Bound = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    height:100%;
    position:relative;
    min-width: 768px;
    overflow: hidden;

`
class App extends Component {
     
    render() {
        return (
            <Bound>
                BABS
            </Bound>
        );
    }
}

export default App;
