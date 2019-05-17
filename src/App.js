import React, { Component } from 'react';
import styled from 'styled-components'
import DemoStyle from './components/DemoStyle'
import LinkStyle from './components/LinkStyle'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

class App extends Component {
    render() {
        return (
            <>
                <Wrapper>
                    <Title>
                        Hello World!
                </Title>
                </Wrapper>

                <div>
                    <Button>Normal Button</Button>
                    <Button as="a" href="/">Link with Button styles</Button>
                    <TomatoButton as="a" href="/">Link with Tomato Button styles</TomatoButton>
                </div>
                <DemoStyle />
                <LinkStyle />
            </>

        );
    }
}

export default App;
