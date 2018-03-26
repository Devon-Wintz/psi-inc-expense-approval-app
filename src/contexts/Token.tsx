import * as React from 'react';
const createReactContext = require('create-react-context');
import { Context } from 'create-react-context';
import { Component } from 'react';
import Store = require('electron-store');

const TokenContext: Context<string> = createReactContext('');

export interface ITokenProviderState {
  token: string;
}

export class TokenProvider extends Component<{}, ITokenProviderState> {
  public state = {
    token: ''
  };

  public componentDidMount(): void {
    const store: Store = new Store();
    const token: string = store.get('token', '');
    this.setState({ token });
  }

  public render() {
    return (
      <TokenContext.Provider value={this.state.token}>
        {this.props.children}
      </TokenContext.Provider>
    );
  }
}

export const TokenConsumer = TokenContext.Consumer;
