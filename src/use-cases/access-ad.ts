import * as msal from '@azure/msal-browser';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { AzureAD } from 'config/ad.config';
import { useEffect, useState } from 'react';

export const useAccessAd = () => {
  const [authResult, setAuthResult] = useState({} as msal.AuthenticationResult);
  const msalHook = useMsal();
  
  msalHook.instance = new msal.PublicClientApplication(AzureAD);

  useEffect(() => {
    msalHook.instance.loginPopup({
      scopes: ['User.Read']
    })
      .then(setAuthResult)
      .catch(console.error);
  }, []);

  return {
    auth: authResult
  };
};
