import * as React from 'react';
import { Component } from 'react';
import Store = require('electron-store');
import Login from './Login';
import Main from './Main';

export interface IAppState {
  jwt: string;
}

class App extends Component<{}, IAppState> {
  public state = { jwt: '' };

  public componentDidMount(): void {
    const store: Store = new Store();
    const jwt: string = store.get('jwt', '');
    this.setState({ jwt });
  }

  public render() {
    const { jwt } = this.state;

    if (jwt) {
      return <Main jwt={jwt} />;
    } else {
      return <Login />;
    }
  }
}

export default App;
