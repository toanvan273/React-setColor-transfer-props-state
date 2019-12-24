import React, { Component } from 'react';
import styled from 'styled-components'

const Bound = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 500px;
            border: 5px solid #aa721a;
        }
       
`
class App extends Component {

    render() {
        const { imgLink } = this.props
        return (
            <Bound>
                <img src={imgLink} alt='alt' />
            </Bound>
        );
    }
}

export default App;
