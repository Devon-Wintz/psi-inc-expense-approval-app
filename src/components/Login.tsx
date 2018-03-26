import * as React from 'react';
import { Component } from 'react';
import { DocumentCard, DocumentCardTitle } from 'office-ui-fabric-react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { DefaultButton } from 'office-ui-fabric-react';

export interface ILoginState {
  employeeId: string;
  pin: string;
}

class Login extends Component<{}, ILoginState> {
  public state: ILoginState = {
    employeeId: '',
    pin: ''
  };

  private validateEmployeeId = (employeeId: string): boolean =>
    employeeId.length === 6;

  private validatePin = (pin: string): boolean => pin.length === 4;

  private employeeIdOnGetErrorMessage = (value: string): string =>
    this.validateEmployeeId(value)
      ? ''
      : '6-digit employee identification number';

  private pinOnGetErrorMessage = (value: string): string =>
    this.validatePin(value) ? '' : '4-digit personal PIN';

  private validateCredentials = (credentials: ILoginState): boolean =>
    this.validateEmployeeId(credentials.employeeId) &&
    this.validatePin(credentials.pin);

  public render() {
    return (
      <div className="Login">
        <DocumentCard className="LoginCard">
          <DocumentCardTitle title="Login" />
          <form action="">
            <TextField
              label="Employee ID"
              autoComplete="on"
              onGetErrorMessage={this.employeeIdOnGetErrorMessage}
              validateOnLoad={false}
              deferredValidationTime={1000}
              onChanged={(employeeId: string) => this.setState({ employeeId })}
            />
            <TextField
              label="PIN"
              onGetErrorMessage={this.pinOnGetErrorMessage}
              validateOnLoad={false}
              deferredValidationTime={1000}
              onChanged={(pin: string) => this.setState({ pin })}
            />
            <div className="LoginCardButton">
              <DefaultButton
                type="submit"
                text="Login"
                disabled={!this.validateCredentials(this.state)}
              />
            </div>
          </form>
        </DocumentCard>
      </div>
    );
  }
}

export default Login;
