import * as React from 'react';
import { Component } from 'react';
import Loading from './Loading';

export interface IMainProps {
  jwt: string;
}

export interface IMainState {
  loading: boolean;
}

class Main extends Component<IMainProps, IMainState> {
  public state = { loading: true };

  public render() {
    const { loading } = this.state;

    if (loading) {
      return <Loading />;
    } else {
      return <div className="Main">Main</div>;
    }
  }
}

export default Main;
