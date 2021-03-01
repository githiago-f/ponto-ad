import React, { StrictMode } from 'react';
import Theme from './theme';
import { BaseRoutes } from 'router';

const App = () => {
  return (
    <StrictMode>
      <Theme>
        <BaseRoutes />
      </Theme>
    </StrictMode>
  );
};

export default App;
