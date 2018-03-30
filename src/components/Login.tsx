import * as React from 'react';
import { Component } from 'react';
import { DocumentCard, DocumentCardTitle } from 'office-ui-fabric-react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { DefaultButton } from 'office-ui-fabric-react';

export interface ICredentials {
  employeeId: string;
  pin: string;
}

export interface ILoginProps {
  setToken: (token: string) => void;
}

export interface ILoginState {
  loading: boolean;
  credentials: ICredentials;
}

class Login extends Component<ILoginProps, ILoginState> {
  public state: ILoginState = {
    loading: false,
    credentials: {
      employeeId: '',
      pin: ''
    }
  };

  private updateEmloyeeId = (employeeId: string): void =>
    this.setState(state => ({
      ...state,
      credentials: {
        ...state.credentials,
        employeeId
      }
    }));

  private updatePin = (pin: string): void =>
    this.setState(state => ({
      ...state,
      credentials: {
        ...state.credentials,
        pin
      }
    }));

  private validateEmployeeId = (employeeId: string): boolean =>
    employeeId.length === 6;

  private validatePin = (pin: string): boolean => pin.length === 4;

  private employeeIdOnGetErrorMessage = (value: string): string =>
    this.validateEmployeeId(value)
      ? ''
      : '6-digit employee identification number';

  private pinOnGetErrorMessage = (value: string): string =>
    this.validatePin(value) ? '' : '4-digit personal PIN';

  private validateCredentials = (credentials: ICredentials): boolean =>
    this.validateEmployeeId(credentials.employeeId) &&
    this.validatePin(credentials.pin);

  public render() {
    const { credentials } = this.state;

    return (
      <div className="Login">
        <DocumentCard className="LoginCard">
          <DocumentCardTitle title="Login" />
          <form action="">
            <TextField
              label="Employee ID"
              autoComplete="on"
              onChanged={this.updateEmloyeeId}
              onGetErrorMessage={this.employeeIdOnGetErrorMessage}
              validateOnLoad={false}
              deferredValidationTime={1000}
            />
            <TextField
              label="PIN"
              onChanged={this.updatePin}
              onGetErrorMessage={this.pinOnGetErrorMessage}
              validateOnLoad={false}
              deferredValidationTime={1000}
            />
            <div className="LoginCardButton">
              <DefaultButton
                type="submit"
                text="Login"
                disabled={!this.validateCredentials(credentials)}
                onClick={event => {
                  event.preventDefault();
                }}
              />
            </div>
          </form>
        </DocumentCard>
      </div>
    );
  }
}

export default Login;
