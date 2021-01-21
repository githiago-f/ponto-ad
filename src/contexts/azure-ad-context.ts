import { AuthenticationResult, PublicClientApplication } from '@azure/msal-browser';
import { config } from 'config';
import { createContext, useCallback, useEffect, useState } from 'react';

export type Context = {
  auth: AuthenticationResult | null,
  login: () => void,
  logout: () => void
};

export const AzureContext = createContext({} as Context);

export const useAzure = (): Context => {
  const [ authResult, setAuthResult ] = useState(null as AuthenticationResult | null);
  const msal = new PublicClientApplication({ 
    auth: config.AzureAd
  });

  useEffect(() => {
    const first = msal.getAllAccounts().shift();
    if(first && !authResult) {
      msal.acquireTokenSilent({
        scopes: config.scopes,
        account: first
      })
        .then(setAuthResult)
        .catch(console.error);
    }
  }, [msal, authResult]);

  const login = useCallback(() => {
    msal.loginPopup({
      scopes: config.scopes
    })
      .then(setAuthResult)
      .catch(console.error);
  }, [msal]);

  const logout = useCallback(() => {
    msal.logout();
  }, [msal]);

  return {
    auth: authResult,
    login,
    logout
  };
};
