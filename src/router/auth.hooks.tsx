import React, { useMemo } from 'react';
import { Landing } from 'pages/Landing';
import { Home } from 'pages/Home';
import { Route, Switch } from 'react-router-dom';
import { TAzureHook } from '@dataTypes/Azure';

export const useAuth = (azureAd: TAzureHook) => {
  const Routes = useMemo(() => {
    if(azureAd.auth.accessToken) {
      return (
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      );
    } else {
      return (
        <Route exact path="/" component={Landing} />
      );
    }
  }, [azureAd]);

  return {
    Routes
  };
};
