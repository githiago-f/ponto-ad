import React from 'react';
import { 
  BrowserRouter as Router
} from 'react-router-dom';
import { useAccessAd } from 'utils/access-ad';
import { AzureAdContext } from 'utils/ad-context';
import { useAuth } from './auth.hooks';

export const BaseRoutes = () => {
  const azureAd = useAccessAd();
  const {Routes} = useAuth(azureAd);

  return (
    <Router basename={require('./../../package.json').homepage}>
      <AzureAdContext.Provider value={azureAd}>
        {Routes}
      </AzureAdContext.Provider>
    </Router>
  );
};
