import React, { Suspense } from 'react';

import { RelayEnvironmentProvider } from 'relay-hooks';

import environment from './Environment'

const Routes = React.lazy(() => import('./routes'))

function App() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Suspense fallback={<h5>Oops</h5>}>
        <Routes />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default App;
