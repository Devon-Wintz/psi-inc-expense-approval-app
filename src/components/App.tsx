import * as React from 'react';
import { Component } from 'react';
import { TokenConsumer } from '../contexts';
import Login from './Login';
import Main from './Main';

class App extends Component<{}, {}> {
  public render() {
    return (
      <TokenConsumer>
        {({ token, setToken }) =>
          token ? <Main token={token} /> : <Login setToken={setToken} />
        }
      </TokenConsumer>
    );
  }
}

export default App;
