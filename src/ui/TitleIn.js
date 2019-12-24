import React, { Component } from 'react';
import styled from 'styled-components'

const Bound = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 20px;
        b{
            font-size: 20px;
            font-style: italic;
        }
        h3{
            margin-top: 5px;
            font-style: italic;
        }
`
class App extends Component {

    render() {
        const { title, sub } = this.props
        return (
            <Bound>
                <b>{title}</b>
                <h3>{sub}</h3>
            </Bound>
        );
    }
}

export default App;
