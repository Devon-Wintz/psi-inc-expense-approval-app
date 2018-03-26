import * as React from 'react';
import { Component } from 'react';
import { TokenConsumer } from '../contexts';
import Login from './Login';
import Main from './Main';

class App extends Component<{}, {}> {
  public render() {
    return (
      <TokenConsumer>
        {value => (value ? <Main token={value} /> : <Login />)}
      </TokenConsumer>
    );
  }
}

export default App;
