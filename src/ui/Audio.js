import React, { Component } from 'react';
import styled from 'styled-components'

const Bound = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        audio{
            width: 100%;
        }
`
class App extends Component {

    render() {
        const { link, title } = this.props
        return (
            <Bound>
                <h3>{title}</h3>
                <audio controls >
                    <source src={link} type="audio/mpeg" />
                </audio>
            </Bound>
        );
    }
}

export default App;
