import * as React from 'react';
import { SFC } from 'react';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react';

const Loading: SFC<{}> = () => (
  <div className="Loading">
    <Spinner size={SpinnerSize.large} label="Application loading..." />
  </div>
);

export default Loading;
