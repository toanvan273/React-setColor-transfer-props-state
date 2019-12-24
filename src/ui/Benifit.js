import React, { Component } from 'react';
import styled from 'styled-components'

const Bound = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 15px;
        b{
            font-size: 20px;
        }
        h3{
            margin-top: 5px;
            font-weight: 900;
        }
`
class App extends Component {

    render() {
        const { title, content } = this.props
        return (
            <Bound>
                <h3>{title}</h3>
                <b>{content}</b>
            </Bound>
        );
    }
}

export default App;
