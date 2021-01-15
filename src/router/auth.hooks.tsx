import React, { useMemo } from 'react';
import { Landing } from 'pages/Landing';
import { Home } from 'pages/Home';
import { Route, Switch } from 'react-router-dom';
import {Context} from 'services/azure-service';
import { LocalUserContext } from 'utils/graph.api';

export const useAuth = (azureAd: Context, userData: any) => {
  const Routes = useMemo(() => {
    if(azureAd?.auth?.accessToken) {
      return (
        <Switch>
          <LocalUserContext.Provider value={userData}>
            <Route exact path="/" component={Home} />
          </LocalUserContext.Provider>
        </Switch>
      );
    } else {
      return (
        <Route exact path="/" component={Landing} />
      );
    }
  }, [azureAd, userData]);

  return {
    Routes
  };
};
