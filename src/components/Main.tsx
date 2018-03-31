import * as React from 'react';
import { Component } from 'react';
import Loading from './Loading';

export enum UserRole {
  Requester = 'Requester',
  Approver = 'Approver',
  Administrator = 'Administrator',
  Procurement = 'Procurement'
}

export interface IUserInfo {
  employeeId: string;
  role: UserRole | string;
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
          role: UserRole.Requester,
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
    const { loading, userInfo } = this.state;

    if (loading) {
      return <Loading />;
    } else {
      // render appropriate component for user's role
      const { Requester } = UserRole;

      switch (userInfo.role) {
        case Requester:
          return <div>Requester</div>;

        default:
          return null;
      }
    }
  }
}

export default Main;
