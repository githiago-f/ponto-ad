import * as msal from '@azure/msal-browser';
import { useMsal } from '@azure/msal-react';
import { AzureAD } from 'config/ad.config';
import { useCallback, useEffect, useState } from 'react';

export const useAccessAd = () => {
  const [authResult, setAuthResult] = useState({} as msal.AuthenticationResult);
  const msalHook = useMsal();
  
  msalHook.instance = new msal.PublicClientApplication(AzureAD);

  useEffect(() => {
    const first = msalHook.instance.getAllAccounts().shift();
    if(first) {
      msalHook.instance.acquireTokenSilent({
        scopes: ['User.Read'],
        account: first as msal.AccountInfo
      }).then(setAuthResult);
    }
  }, []);

  const login = useCallback(() => {
    msalHook.instance.loginPopup({
      scopes: ['User.Read']
    })
      .then(setAuthResult)
      .catch(console.error);
  }, []);

  return {
    auth: authResult,
    msal: msalHook,
    login
  };
};
