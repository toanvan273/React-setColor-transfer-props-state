import React, { Component } from 'react';
import styled from 'styled-components'

const Bound = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
`
class App extends Component {

    render() {
        const { number, title } = this.props
        return (
            <Bound>
                <p>{number}</p>
                <h4>{title}</h4>
            </Bound>
        );
    }
}

export default App;
