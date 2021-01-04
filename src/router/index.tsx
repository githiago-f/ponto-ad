import React, { useEffect } from 'react';
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Landing } from 'pages/Landing';
import { useAccessAd } from 'use-cases/access-ad';

export const BaseRoutes = () => {
  const {auth} = useAccessAd();

  return (
    <Router basename={require('./../../package.json').homepage}>
      {auth.accessToken ? 'Authenticated' : 'Not authenticated'}
      <Route exact path="/" component={Landing} />
    </Router>
  );
};
