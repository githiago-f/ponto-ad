import React from 'react';
import { 
  BrowserRouter as Router
} from 'react-router-dom';
import { AzureContext, useAzure } from 'contexts/azure-ad-context';
import { useLocalUserData } from 'contexts/local-user-context';
import { useAuth } from './auth.hooks';

export const BaseRoutes = () => {
  const azureAd = useAzure();
  const userData = useLocalUserData(azureAd.auth?.accessToken);
  const {Routes} = useAuth(azureAd, userData);

  return (
    <Router basename={require('./../../package.json').homepage}>
      <AzureContext.Provider value={azureAd}>
        {Routes}
      </AzureContext.Provider>
    </Router>
  );
};
