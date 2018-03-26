import * as React from 'react';
const createReactContext = require('create-react-context');
import { Context } from 'create-react-context';
import { Component } from 'react';
import Store = require('electron-store');

export interface ITokenContext {
  token: string;
  removeToken: () => void;
  setToken: (token: string) => void;
}

export interface ITokenProviderState {
  token: string;
}

const TokenContext: Context<ITokenContext> = createReactContext();

export class TokenProvider extends Component<{}, ITokenProviderState> {
  public state = {
    token: ''
  };

  private store: Store = new Store();

  private removeToken = (): void => {
    this.store.delete('token');
  };

  private setToken = (token: string) => {
    this.store.set('token', token);
  };

  public componentDidMount(): void {
    // load token
    const token: string = this.store.get('token', '');
    this.setState({ token });

    // update state when token changes
    this.store.onDidChange('token', (newToken: string): void =>
      this.setState({ token: newToken })
    );
  }

  public render() {
    return (
      <TokenContext.Provider
        value={{
          token: this.state.token,
          removeToken: this.removeToken,
          setToken: this.setToken
        }}
      >
        {this.props.children}
      </TokenContext.Provider>
    );
  }
}

export const TokenConsumer = TokenContext.Consumer;
