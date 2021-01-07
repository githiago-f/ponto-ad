import * as msal from '@azure/msal-browser';
import { useMsal } from '@azure/msal-react';
import { AzureAD } from 'config/ad.config';
import { useCallback, useEffect, useState } from 'react';

export const useAzureAd = () => {
  const [authResult, setAuthResult] = useState({} as msal.AuthenticationResult);
  const msalHook = useMsal();
  
  msalHook.instance = new msal.PublicClientApplication(AzureAD);

  useEffect(() => {
    const first = msalHook.instance.getAllAccounts().shift();
    if(first && !authResult.accessToken) {
      msalHook.instance.acquireTokenSilent({
        scopes: ['User.Read'],
        account: first
      }).then(setAuthResult);
    }
  }, [msalHook.instance, authResult.accessToken]);

  const login = useCallback(() => {
    msalHook.instance.loginPopup({
      scopes: ['User.Read']
    })
      .then(setAuthResult)
      .catch(console.error);
  }, [msalHook.instance]);

  return {
    auth: authResult,
    msal: msalHook,
    login
  };
};
