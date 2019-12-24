import React, { Component } from 'react';
import styled from 'styled-components'

const Bound = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 20px;
        p{
            font-size: 20px;
        }
        h3{
            margin-top: 5px;
            /* font-style: italic; */
        }
`
class App extends Component {

    render() {
        const { people, content } = this.props
        return (
            <Bound>
                <h3>{people}</h3>
                <p>{content}</p>
            </Bound>
        );
    }
}

export default App;
