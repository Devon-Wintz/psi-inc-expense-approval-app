import * as React from 'react';
import { SFC } from 'react';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import App from './components/App';

const Root: SFC<{}> = () => (
  <Fabric>
    <App />
  </Fabric>
);

export default Root;
