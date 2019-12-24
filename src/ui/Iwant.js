import React, { Component } from 'react';
import styled from 'styled-components'

const Bound = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
       .trick{
        width: 90%;
        text-align: center;
        background: green;
        border-radius: 10px;
        border: 3px solid #b353aa;
        color: #ffd000;
        cursor: pointer;
        margin-top: 20px;
       }
       
`
class App extends Component {

    render() {
        return (
            <Bound onClick={()=>{this.props.toBottom()}}>
                <div className='trick' >
                <p>Tôi muốn sở hữu USB</p>
                <b>(Chỉ còn duy nhất 29 USB)</b>
                </div>
               
            </Bound>
        );
    }
}

export default App;
