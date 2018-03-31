import * as React from 'react';
import { Component } from 'react';
import Loading from './Loading';

export interface IUserInfo {
  employeeId: string;
  role: string;
  name: string;
  position: string;
}

export interface IMainProps {
  token: string;
}

export interface IMainState {
  loading: boolean;
  userInfo: IUserInfo;
}

class Main extends Component<IMainProps, IMainState> {
  state = {
    loading: true,
    userInfo: {
      employeeId: '',
      role: '',
      name: '',
      position: ''
    }
  };

  private fetchUserInfo = () => {
    setTimeout(() => {
      this.setState({
        loading: false,
        userInfo: {
          employeeId: '123456',
          role: 'Requester',
          name: 'Rajendra Tiwari',
          position: 'Supervisor'
        }
      });
    }, 1500);
  };

  componentDidMount() {
    this.fetchUserInfo();
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      return <Loading />;
    } else {
      return <div className="Main">Main</div>;
    }
  }
}

export default Main;
