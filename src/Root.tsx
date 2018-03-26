import * as React from 'react';
import { SFC } from 'react';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { TokenProvider } from './contexts';
import App from './components/App';

const Root: SFC<{}> = () => (
  <Fabric>
    <TokenProvider>
      <App />
    </TokenProvider>
  </Fabric>
);

export default Root;
