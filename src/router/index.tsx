import React from 'react';
import { 
  BrowserRouter as Router
} from 'react-router-dom';
import { useAzureAd } from 'utils/useAzureAd';
import { AzureAdContext } from 'utils/AzureAdContext';
import { useAuth } from './auth.hooks';

export const BaseRoutes = () => {
  const azureAd = useAzureAd();
  const {Routes} = useAuth(azureAd);

  return (
    <Router basename={require('./../../package.json').homepage}>
      <AzureAdContext.Provider value={azureAd}>
        {Routes}
      </AzureAdContext.Provider>
    </Router>
  );
};
